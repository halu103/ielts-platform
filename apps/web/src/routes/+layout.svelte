<script lang="ts">
	import '@repo/ui/styles';
	import { register } from 'swiper/element/bundle';
	register();
	const { children } = $props();
</script>

{@render children()}
