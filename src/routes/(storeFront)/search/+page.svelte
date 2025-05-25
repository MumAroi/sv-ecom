<script lang="ts">
	import Filter from '@/components/Filter.svelte';
	import ProductCard from '@/components/ProductCard.svelte';
	import SearchBar2 from '@/components/SearchBar2.svelte';
	const { data } = $props();
	const isProducts = true;
</script>

<div class="mx-auto my-5 max-w-6xl md:my-20 lg:px-10">
	<h1 class="text-xl font-bold capitalize md:text-3xl">Search for Chair</h1>
	<div class="my-5 flex items-center justify-between">
		<SearchBar2 />
	</div>

	<section class="flex w-full flex-col justify-between gap-6 lg:flex-row">
		{#if isProducts}
			<div class="relative hidden basis-[200px] lg:inline-flex">
				<div class="sticky top-[5rem] left-0 flex flex-col gap-5">
					<Filter />
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-5">
				<div class="space-y-3 md:space-y-5">
					<div class="grid grid-cols-1 gap-4">
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>
			</div>
		{:else}
			<div class="grid h-[400px] w-full place-content-center place-items-center">
				<p class="text-muted-foreground text-center text-xl font-medium">No Product found</p>
			</div>
		{/if}
	</section>
</div>
