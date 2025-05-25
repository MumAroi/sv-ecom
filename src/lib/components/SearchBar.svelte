<script lang="ts">
	import { Search } from '@lucide/svelte';
	import Button from './ui/button/button.svelte';
</script>

<form
	class="text-foreground focus-within:ring-primary absolute bottom-3 left-5 flex w-full max-w-xs items-center rounded-md bg-white px-1 focus-within:ring sm:max-w-md md:left-10 md:gap-2 md:px-3"
>
	<Search />
	<input type="text" class="h-12 flex-1 outline-none md:h-16" />
    <Button>Search</Button>
</form>
