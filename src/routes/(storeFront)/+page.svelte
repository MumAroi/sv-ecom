<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import Fade from 'embla-carousel-fade';
	import Autoplay from 'embla-carousel-autoplay';
	import SearchBar from '@/components/SearchBar.svelte';
	import Button from '@/components/ui/button/button.svelte';

	const carouselPics = ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'];
</script>

<div class="mx-auto mt-2 max-w-7xl px-2 md:mt-5 md:px-5">
	<Carousel.Root
		opts={{ containScroll: false }}
		plugins={[Fade(), Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true })]}
		class="relative w-full max-w-full"
	>
		<Carousel.Content class="-ml-1">
			{#each carouselPics as pic}
				<Carousel.Item class="Item">
					<div
						style="background-image: url({pic})"
						class="relative mx-auto h-[350px] overflow-clip rounded-lg bg-cover bg-no-repeat p-1 text-white md:h-[480px]"
					>
						<div class="absolute inset-0 bg-gradient-to-br from-black/20 to-black/80">
							<div class="ms:px-10 absolute right-0 bottom-0 z-10 mb-14 px-5 md:mb-20">
								<h1 class="mb-1 text-2xl font-bold md:mb-3 md:text-2xl">
									Goods and more deliver to your door
								</h1>
								<p class="mb-2 text-sm md:mb-5 md:text-lg">
									We offer a wide range of products at competitive prices, delivered right to your
									doorstep.
								</p>
							</div>
						</div>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<SearchBar />
	</Carousel.Root>
	<section class="mt-20">
		<h2 class="text-2xl font-bold md:text-4xl">what we offer</h2>
		<p class="text-muted-foreground mt-2 text-sm md:mt-3 md:text-base">
			Explore our wide range of products at competitive prices, delivered right to your doorstep.
		</p>
		<Button href="/search" class="my-4 md:my-6">Explore Products Now</Button>
	</section>
</div>
