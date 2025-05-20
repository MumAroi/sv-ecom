<script lang="ts">
	import { Button } from '@/components/ui/button';
	import { Input } from '@/components/ui/input';
	import * as Table from '@/components/ui/table';
	import { CheckCircleIcon, ClipboardIcon, ClockIcon, Truck } from '@lucide/svelte';

	let status = $state('processing');
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight capitalize">Orders</h2>
		<div class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search by order code" />
			<Button type="submit">Search</Button>
		</div>
	</div>
	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Order Id</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Customer</Table.Head>
				<Table.Head>Amount + Shipping</Table.Head>
				<Table.Head>Date</Table.Head>
				<Table.Head class="text-right">Actions</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium">
					<div class="flex items-center gap-1">
						<span>OD001</span>
						<Button
							class="hover:bg-transparent"
							onclick={() => {
								navigator.clipboard.writeText('OD001');
							}}
							variant="ghost"
						>
							<ClipboardIcon class="size-4" />
						</Button>
					</div>
				</Table.Cell>
				<Table.Cell>
					<div class="flex items-center gap-1">
						{#if status === 'delivered'}
							<CheckCircleIcon class="mr-2 h-4 w-4 text-green-500" />
						{:else if status === 'processing'}
							<ClockIcon class="mr-2 h-4 w-4 text-yellow-500" />
						{:else if status === 'shipped'}
							<Truck class="mr-2 h-4 w-4 text-red-500" />
						{/if}
						<span>{status}</span>
					</div>
				</Table.Cell>
				<Table.Cell>John Doe</Table.Cell>
				<Table.Cell>$500</Table.Cell>
				<Table.Cell>11-02-2022</Table.Cell>
				<Table.Cell class="text-right">
					<Button variant="outline" size="sm">update to shipped</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
