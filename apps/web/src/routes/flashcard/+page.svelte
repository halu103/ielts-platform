<script lang="ts">
  import {  SwiperCard } from '@repo/ui';
	import { onMount } from 'svelte';

  let curPage = $state(1);
  let flashcards = $state<any[]>([]);
  let hasMore = $state(true);
  let isLoading = $state(false);

  const fetchData = async () => {
    if (isLoading || !hasMore) return;
    isLoading = true;
    try {
      const res = await fetch(`/api/flashcard?page=${curPage}`);
      if (res.ok) {
        const { items, hasMore: more } = await res.json();
        flashcards = [...flashcards, ...items];
        hasMore = more;
        curPage++;
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading = false;
    }
  };

 onMount(() => {
   fetchData();
 })
</script>

<div class="min-h-screen w-full flex justify-center items-center">
  <SwiperCard cards={flashcards} onLoadMore={fetchData} />
</div>