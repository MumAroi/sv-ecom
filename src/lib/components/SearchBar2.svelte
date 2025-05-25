<script lang="ts">
	import { Search } from '@lucide/svelte';
</script>

<form
	class="bg-muted focus-within:ring-primary flex w-full items-center justify-between rounded-3xl px-3.5 focus-within:ring-2"
>
	<input
		type="text"
		placeholder="Search..."
		class="placeholder:text-muted-foreground h-11 flex-1 bg-transparent outline-none"
	/>
	<Search class="text-muted-foreground" />
</form>
