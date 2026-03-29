import { onMount } from 'svelte';

export function paginatedResource<T>(
	fn: (page: number) => {
		refresh: () => void;
		current?: { cards: T[]; totalPages: number; hasMore: boolean };
	} & Promise<{ cards: T[]; totalPages: number; hasMore: boolean }>
) {
	let items = $state.raw<T[]>([]);
	let loading = $state(false);
	let error: Error | null = $state.raw(null);
	let curPage = $state.raw(1);
	let hasMore = $state.raw(true);

	const loadMore = () => {
		if (loading || !hasMore) return;
		loading = true;
		const query = fn(curPage);
		query
			.then((result) => {
				items = [...items, ...result.cards];
				hasMore = result.hasMore;
				curPage++;
				error = null;
			})
			.catch((e) => {
				error = e;
			})
			.finally(() => {
				loading = false;
			});
	};

	const refresh = () => {
		if (loading) return;
		loading = true;
		items = [];
		curPage = 1;
		hasMore = true;

		const query = fn(1);
		query.refresh();
		query
			.then((result) => {
				items = result.cards;
				hasMore = result.hasMore;
				curPage = 2;
				error = null;
			})
			.catch((e) => {
				error = e;
			})
			.finally(() => {
				loading = false;
			});
	};

	onMount(() => {
		loadMore();
	});

	return {
		get items() {
			return items;
		},
		get loading() {
			return loading;
		},
		get error() {
			return error;
		},
		get hasMore() {
			return hasMore;
		},
		get curPage() {
			return curPage;
		},
		loadMore,
		refresh
	};
}
