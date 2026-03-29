<script lang="ts">
	import SwiperCard from './_components/SwiperCard.svelte';
	import { getFlashCards } from './flashcard.remote';
	import { paginatedResource } from '$lib/resource/paginatedResource.svelte';
	import { Button } from '@repo/ui';
	const flashCardsResource = paginatedResource((page) => getFlashCards(page));
</script>

<div class="flex min-h-screen w-full items-center justify-center">
	<SwiperCard
		cards={flashCardsResource.items}
		onLoadMore={() => flashCardsResource.loadMore()}
		isLoading={flashCardsResource.loading}
	/>
</div>
<Button.Button onclick={() => flashCardsResource.refresh()}>Refresh</Button.Button>
