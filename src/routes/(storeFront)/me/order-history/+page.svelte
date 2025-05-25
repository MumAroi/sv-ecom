<script lang="ts">
	import * as Collapsible from '$lib/components/ui/collapsible';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '@/utils.js';
	import { ChevronDown } from '@lucide/svelte';
	import * as Table from '$lib/components/ui/table';

	const { data } = $props();
	const status = 'processing';
	const order = false;
</script>

{#if order}
	<Collapsible.Root class="mb-2">
		<div class="bg-muted flex items-center justify-between rounded-md p-5">
			<div class="flex flex-wrap items-center justify-between gap-3 md:gap-10">
				<div class="">
					<p class="text-sm font-medium capitalize">Date placed</p>
					<p class="text-muted-foreground text-xs">11/11/11</p>
				</div>
			</div>
			<div>
				<p class="text-sm font-medium capitalize">Total sum</p>
				<p class="text-muted-foreground text-xs">$9000</p>
			</div>
			<div>
				<p class="text-sm font-medium capitalize">Order number</p>
				<p class="text-muted-foreground text-xs">OD1234123124</p>
			</div>
			<div class="">
				<p class="text-sm font-medium capitalize">Status</p>
				<span
					class={cn(
						'inline-flex items-center justify-center rounded-full border px-2 py-1 text-xs font-medium',
						{
							'border-yellow-200 bg-yellow-100 text-yellow-800': status === 'processing',
							'border-green-200 bg-green-100 text-green-800': ['shipped', 'delivered'].includes(
								status
							)
						}
					)}
				>
					{status}
				</span>
			</div>
			<Collapsible.Trigger>
				<Button variant="ghost" size="sm" class="w-9 p-0">
					<ChevronDown class="size-4" />
					<span class="sr-only">toggle</span>
				</Button>
			</Collapsible.Trigger>
		</div>
		<Collapsible.Content class="m-0 space-y-2 p-0">
			<Table.Root class="rounded-md border">
				<Table.Header>
					<Table.Row class="text-sm">
						<Table.Head class="w-[100px]"></Table.Head>
						<Table.Head>Name</Table.Head>
						<Table.Head>sku</Table.Head>
						<Table.Head>Unit Price</Table.Head>
						<Table.Head>Quantity</Table.Head>
						<Table.Head class="text-right">Total</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body class="text-xs">
					<Table.Row>
						<Table.Cell class="font-medium">
							<img src="/hero/hero-1.jpg" class="size-16 rounded-lg" alt="" />
						</Table.Cell>
						<Table.Cell class="capitalize">Black Chair</Table.Cell>
						<Table.Cell class="capitalize">SKU123456</Table.Cell>
						<Table.Cell>$100</Table.Cell>
						<Table.Cell>2</Table.Cell>
						<Table.Cell class="text-right">$200</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</Collapsible.Content>
	</Collapsible.Root>
{:else}
	<div class="flex h-[50vh] w-full flex-col items-center justify-center text-center">
		<h1 class="font-display text-3xl font-semibold">You haven't made any orders yet</h1>
		<p class="text-muted-foreground">You'll find all the details of your orders here</p>
	</div>
{/if}
