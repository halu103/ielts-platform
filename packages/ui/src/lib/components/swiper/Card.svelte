<script lang="ts">
  type Props = {
    cards: Array<{ front: string; back: string; image?: string }>
  };

  let { cards }:Props = $props();

  let swiper: any = $state(null);
  let activeIndex = $state(0);
  let flippedIndex = $state<number | null>(null);

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
    <swiper-slide class="rounded-xl overflow-hidden bg-chart-{i + 1}">
      <div class="relative w-full h-64">

        {#if flippedIndex === i}
            <div class="p-6 flex flex-col justify-between h-full text-center">
              <h3 class="text-2xl font-bold mb-4 text-primary-foreground">
                {card.back}
              </h3>

              <button
                class="px-4 py-2 bg-destructive text-destructive-foreground rounded"
                onclick={toggleCurrentCard}
              >
                Flip lại
              </button>
            </div>

        {:else}

        <div class="p-4 flex flex-col justify-between h-full">
              <h3 class="text-xl font-bold text-foreground">
                {card.front}
              </h3>

              <button
                class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded"
                onclick={toggleCurrentCard}
              >
                Flip để xem đáp án
              </button>
            </div>

        {/if}

      </div>
    </swiper-slide>
  {/each}
</swiper-container>