<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '@/utils';

	const { data, children } = $props();

	const tabs = [
		{
			title: 'Personal Info',
			href: '/me/personal-info'
		},
		{
			title: 'Order History',
			href: '/me/order-history'
		},

		{
			title: 'Addresses',
			href: '/me/addresses'
		},
		{
			title: 'Settings',
			href: '/me/settings'
		}
	];

	const path = $derived(page.url.pathname);
</script>

<div class="mx-auto mt-10 w-full max-w-4xl px-3">
	<div class="flex items-center justify-between">
		<h1 class="font-display text-4xl font-bold capitalize">Profile</h1>
	</div>
	<div class="my-5 flex w-full flex-col gap-2 border-b-2 sm:flex-row md:gap-10">
		{#each tabs as { href, title }}
			<a
				{href}
				class={cn(
					'border-b-2 py-3 text-sm font-normal text-gray-700 capitalize sm:w-fit sm:border-b-0 md:text-base',
					{ ' border-b-2 border-b-black font-bold text-black  sm:border-b-2': path === href }
				)}
			>
				{title}
			</a>
		{/each}
	</div>
</div>

<div class="mx-auto my-10 max-w-4xl px-3 md:px-0">
	{@render children()}
</div>
