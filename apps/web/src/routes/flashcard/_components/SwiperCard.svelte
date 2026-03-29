<script lang="ts">
	type Props = {
		cards: Array<{ front: string; back: string; image?: string }>;
		onLoadMore?: () => void;
		isLoading: boolean;
	};
	import { Skeleton } from '@repo/ui';
	let { cards, onLoadMore, isLoading }: Props = $props();
	const LOAD_MORE_THRESHOLD = 5;
	let swiper: any = $state(null);
	let activeIndex = $state(0);
	let flippedIndex = $state<number | null>(null);
	let isNearEnd = $derived(activeIndex >= cards.length - 1 - LOAD_MORE_THRESHOLD);
	$effect(() => {
		if (isNearEnd && onLoadMore) {
			onLoadMore();
		}
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
	class="w-full max-w-md"
	effect="cards"
	grab-cursor="true"
	onswiperslidechange={onSlideChange}
>
	{#each cards as card, i}
		<swiper-slide class="overflow-hidden rounded-xl" style="background: var(--chart-{(i % 5) + 1})">
			<div class="relative h-96 w-full">
				{#if flippedIndex === i}
					<div class="flex h-full flex-col justify-between p-6 text-center">
						<h3 class="text-primary-foreground mb-4 text-2xl font-bold">{card.back}</h3>
						<button
							class="bg-destructive text-destructive-foreground rounded px-4 py-2"
							onclick={toggleCurrentCard}>Flip lại</button
						>
					</div>
				{:else}
					<div class="flex h-full flex-col justify-between p-4">
						<h3 class="text-foreground text-xl font-bold">{card.front}</h3>
						<button
							class="bg-primary text-primary-foreground mt-4 rounded px-4 py-2"
							onclick={toggleCurrentCard}>Flip để xem đáp án</button
						>
					</div>
				{/if}
			</div>
		</swiper-slide>
	{/each}
	<swiper-slide class={`relative overflow-hidden rounded-xl ${isLoading ? 'block' : 'hidden'}`}>
		<Skeleton.Skeleton class="h-96 w-full" />
	</swiper-slide>
</swiper-container>
