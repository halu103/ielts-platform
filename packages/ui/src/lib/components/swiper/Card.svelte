<script lang="ts">
  type Props = {
    cards: Array<{ front: string; back: string; image?: string }>,
        onLoadMore?: () => Promise<void>;
  };

  let { cards ,onLoadMore}: Props = $props();
const LOAD_MORE_THRESHOLD = 3;
  let swiper: any = $state(null);
  let activeIndex = $state(0);
  let flippedIndex = $state<number | null>(null);
      let isLoadingMore = $state(false);
let isNearEnd = $derived(activeIndex >= cards.length - 1 - LOAD_MORE_THRESHOLD);
$effect(() => {
  if (isNearEnd && onLoadMore && !isLoadingMore) {
    isLoadingMore = true;
    onLoadMore();
  }
});
 $effect(() => {
    cards;
    isLoadingMore = false;
  });
  function toggleCurrentCard() {
    flippedIndex = flippedIndex === activeIndex ? null : activeIndex;
  }

  function onSlideChange(e: any) {
    const s = e.detail?.[0] ?? e.target?.swiper;
    if (!s) return;
    swiper = s;
    activeIndex = s.realIndex ?? s.activeIndex;
    flippedIndex = null;
  }
</script>

<swiper-container
  bind:this={swiper}
  class="max-w-sm flex justify-center items-center"
  effect="cards"
  grab-cursor="true"
  onswiperslidechange={onSlideChange}
>
  {#each cards as card, i}
    <swiper-slide
        class="rounded-xl overflow-hidden"
        style="background: var(--chart-{(i % 5) + 1})"
      >
        <div class="relative w-full h-96">
          {#if flippedIndex === i}
            <div class="p-6 flex flex-col justify-between h-full text-center">
              <h3 class="text-2xl font-bold mb-4 text-primary-foreground">{card.back}</h3>
              <button
                class="px-4 py-2 bg-destructive text-destructive-foreground rounded"
                onclick={toggleCurrentCard}
              >Flip lại</button>
            </div>
          {:else}
            <div class="p-4 flex flex-col justify-between h-full">
              <h3 class="text-xl font-bold text-foreground">{card.front}</h3>
              <button
                class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
                onclick={toggleCurrentCard}
              >Flip để xem đáp án</button>
            </div>
          {/if}
        </div>
      </swiper-slide>
  {/each}
</swiper-container>