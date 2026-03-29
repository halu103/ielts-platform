<script lang="ts">
  type Card = { front: string; back: string };

  type Props = {
    cards: Card[];
  };

  let { cards }: Props = $props();
$inspect('cards props', cards)
  type Tile = {
    tileId: string;
    cardIndex: number;
    type: "front" | "back";
    text: string;
  };

  function shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function buildTiles(cards: Card[]): Tile[] {
    const tiles: Tile[] = [];
    cards.forEach((card, i) => {
      tiles.push({ tileId: `f-${i}`, cardIndex: i, type: "front", text: card.front });
      tiles.push({ tileId: `b-${i}`, cardIndex: i, type: "back", text: card.back });
    });
    return shuffle(tiles);
  }

  let tiles = $state<Tile[]>(buildTiles(cards));
  let selected = $state<string[]>([]);
  let matched = $state<Set<number>>(new Set());
  let wrongPair = $state<string[]>([]);
  let moves = $state(0);
  let done = $state(false);
  let processing = $state(false);

  function handleSelect(tile: Tile) {
    if (processing) return;
    if (matched.has(tile.cardIndex)) return;
    if (selected.includes(tile.tileId)) return;
    if (selected.length === 2) return;

    const next = [...selected, tile.tileId];
    selected = next;

    if (next.length === 2) {
      moves++;
      processing = true;
      const a = tiles.find((t) => t.tileId === next[0])!;
      const b = tiles.find((t) => t.tileId === next[1])!;

      if (a.cardIndex === b.cardIndex && a.type !== b.type) {
        setTimeout(() => {
          matched = new Set([...matched, a.cardIndex]);
          selected = [];
          processing = false;
          if (matched.size === cards.length) done = true;
        }, 400);
      } else {
        wrongPair = next;
        setTimeout(() => {
          selected = [];
          wrongPair = [];
          processing = false;
        }, 800);
      }
    }
  }

  function restart() {
    tiles = buildTiles(cards);
    selected = [];
    matched = new Set();
    wrongPair = [];
    moves = 0;
    done = false;
    processing = false;
  }
</script>

<div class="root">
  <div class="header">
    <div class="title-group">
      <span class="title">Ghép thẻ</span>
      <span class="subtitle">{cards.length} cặp · {matched.size}/{cards.length} ghép xong</span>
    </div>
    <div class="header-right">
      <span class="moves">{moves} lượt</span>
      <button class="restart-btn" onclick={restart}>↺ Làm lại</button>
    </div>
  </div>

  <div class="grid">
    {#each tiles as tile (tile.tileId)}
          {@const isSelected = selected.includes(tile.tileId)}
      {@const isWrong = wrongPair.includes(tile.tileId)}
      {@const isMatched = matched.has(tile.cardIndex)}
      <button
        class="tile {isSelected ? 'border-blue-500': ''}"
        class:wrong={isWrong}
        class:matched={isMatched}
        onclick={() => handleSelect(tile)}
        disabled={isMatched}
      >
        <span class="tile-text">{tile.text}</span>
      </button>
    {/each}
  </div>

  {#if done}
    <div class="overlay">
      <div class="modal">
        <div class="trophy">🎉</div>
        <div class="done-title">Hoàn thành!</div>
        <div class="done-sub">{moves} lượt</div>
        <button class="done-btn" onclick={restart}>Chơi lại</button>
      </div>
    </div>
  {/if}
</div>

<style>
  .root {
    min-height: 100vh;
    background: #12172b;
    padding: 28px 20px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  .header {
    width: 100%;
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-group {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .title {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }

  .subtitle {
    font-size: 13px;
    color: #6b7aaa;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .moves {
    font-size: 14px;
    color: #8899cc;
  }

  .restart-btn {
    padding: 8px 16px;
    background: transparent;
    border: 1px solid #2e3a5c;
    border-radius: 8px;
    color: #8899cc;
    font-size: 13px;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }

  .restart-btn:hover {
    border-color: #5566aa;
    color: #fff;
  }

  .grid {
    width: 100%;
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .tile {
    aspect-ratio: 4/3;
    background: #1c2540;
    border: 2px solid #252f50;
    border-radius: 14px;
    color: #ccd6f6;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
    padding: 16px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s, border-color 0.25s, transform 0.15s, opacity 0.3s;
    word-break: break-word;
  }

  .tile:hover:not(:disabled) {
    border-color: #4a5a99;
    transform: translateY(-2px);
  }

  .tile.matched {
    background: #1a3a2a;
    border-color: #2d6a4a;
    color: #6fcf97;
    opacity: 0.6;
    transform: scale(0.96);
    cursor: default;
  }

  .tile.wrong {
    border-color: #c0392b !important;
    background: #2a1a1a !important;
    animation: shake 0.5s ease;
  }

  .tile-text {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-6px); }
    40% { transform: translateX(6px); }
    60% { transform: translateX(-4px); }
    80% { transform: translateX(4px); }
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 50;
  }

  .modal {
    background: #1c2540;
    border: 2px solid #3a4f8a;
    border-radius: 16px;
    padding: 40px 56px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    animation: pop-in 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .trophy { font-size: 52px; }

  .done-title {
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }

  .done-sub {
    font-size: 14px;
    color: #6b7aaa;
  }

  .done-btn {
    margin-top: 8px;
    padding: 12px 32px;
    background: #3a5bd9;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }

  .done-btn:hover {
    background: #4a6be9;
  }

  @keyframes pop-in {
    0% { transform: scale(0.75); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  @media (max-width: 600px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>