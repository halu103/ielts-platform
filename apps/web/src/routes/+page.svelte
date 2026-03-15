<script lang="ts">
	import {  Button,SwiperCard } from '@repo/ui';
	 const flashcards = [
    { front: 'Capital của Việt Nam?', back: 'Hà Nội 🏛️', image: '/vn-flag.jpg' },
				    { front: '1 + 4 = ?', back: '5', image: '/vn-flag.jpg' },
    { front: '2 + 2 = ?', back: '4' },
    { front: 'useState trong React?', back: 'const [state, setState] = useState()' },
  ];
</script>

<h1 class="text-2xl font-bold text-chart-2">Web</h1>
<Button variant={'destructive'}>Click me</Button>
<SwiperCard cards={flashcards}/>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
