<script lang="ts">
	import { Button } from '@/components/ui/button';
	import type { PageData } from '../$types';
	import { Bike, ChevronRight } from '@lucide/svelte';
	import OrderList from '@/components/OrderList.svelte';
	let { data }: { data: PageData } = $props();
</script>

<main>
	<div
		class="relative flex h-[400px] w-full flex-col border-b-2 bg-[url('/hero/hero-3.jpg')] bg-cover bg-fixed bg-no-repeat"
	>
		<div class="absolute top-[314px] z-50 h-3 w-full bg-white/5 backdrop-blur-sm sm:hidden"></div>
		<div class="absolute top-0 left-0 z-0 h-full w-full bg-black/50"></div>

		<div class=" pt-40 md:pt-44 lg:pt-56">
			<div
				class="  z-10 my-0 flex w-full max-w-md flex-col justify-center gap-7 border border-white/20 bg-white/20 px-4 py-3 text-white shadow-md drop-shadow-md backdrop-blur sm:rounded-r-md md:max-w-3xl md:gap-10 md:px-10"
			>
				<div class="drop-shadow-md">
					<h2 class="font-display text-3xl font-bold md:text-6xl">Checkout</h2>
				</div>
			</div>
		</div>
	</div>
	<section
		class="m-auto my-0 flex h-full w-full max-w-6xl flex-col gap-5 px-2 py-5 sm:px-4 md:px-10 md:py-20 lg:flex-row lg:justify-between xl:px-0"
	>
		<div class="flex w-full flex-col gap-10 md:gap-10 lg:gap-20">
			<div class="flex flex-col gap-4">
				<h4
					class="font-display text-lg leading-loose font-semibold tracking-wide md:text-2xl lg:text-3xl"
				>
					Delivery method
				</h4>
				<div class="flex flex-col gap-1">
					<a
						href="/me/addresses"
						class="flex h-[auto] w-full cursor-pointer items-center justify-between rounded border-b py-5 transition-[shadow] md:border md:border-[#2021251f] md:px-4 md:hover:shadow lg:max-w-[600px]"
					>
						<div class="flex items-center gap-3">
							<Bike />
							<p class="text-sm font-normal md:text-base">
								This delivery would be made to "address name" (change it)
							</p>
						</div>
						<ChevronRight />
					</a>
				</div>
			</div>
		</div>
		<div class="flex h-[auto] w-full flex-col gap-4 py-4 lg:max-w-[600px]">
			<h4 class="font-display text-lg font-semibold tracking-wide md:text-2xl lg:text-3xl">
				Selected items
			</h4>
			<OrderList />
			<div>
				<Button variant="secondary" href="/search">Add more items</Button>
			</div>
		</div>
		<div class="relative z-10 mb-5 w-full lg:mt-[-7.5rem] lg:max-w-[400px]">
			<div class="top-[6rem] left-0 flex w-full flex-col lg:sticky">
				<div
					class="bg-card flex flex-col gap-4 rounded-2xl border border-[#2021251f] p-3 lg:p-[1.5rem] lg:shadow-lg"
				>
					<div class="flex items-center justify-between">
						<p class="text-lg font-semibold lg:text-2xl">Prices incl. taxes</p>
					</div>
					<ul class="flex flex-col gap-3 border-b pt-2 pb-5">
						<li class="flex items-center justify-between">
							<p class="text-sm font-medium lg:text-base">Items subtotal</p>
							<span
								class="bg-primary/20 text-primary rounded-md px-2 py-1 text-sm font-medium lg:text-base"
							>
								$100
							</span>
						</li>
						<li class="flex items-center justify-between">
							<p class="text-sm font-medium lg:text-base">Delivery (Standard shipping)</p>
							<span
								class="bg-primary/20 text-primary rounded-md px-2 py-1 text-sm font-medium lg:text-base"
							>
								$10
							</span>
						</li>
						<li class="flex items-center justify-between">
							<p class="text-sm font-medium lg:text-base">Total</p>
							<span
								class="bg-primary/20 text-primary rounded-md px-2 py-1 text-sm font-medium lg:text-base"
							>
								$110
							</span>
						</li>
						<Button class="w-full" href="/checkout/payment">Proceed To Make Payment</Button>
					</ul>
				</div>
			</div>
		</div>
	</section>
</main>
