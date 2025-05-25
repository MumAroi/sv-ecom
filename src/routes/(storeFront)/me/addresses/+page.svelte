<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { Trash } from '@lucide/svelte';
	import AddNewAddressModal from '@/components/modals/AddNewAddressModal.svelte';
	import { addNewAddressState } from '@/states/modalState.svelte.js';
	const { data } = $props();
	let deleteModalState = $state(false);
	const addressed = true;
</script>

<AddNewAddressModal />
{#if addressed}
	<div>
		<div class="mb-2 ml-auto w-fit px-3">
			<Button onclick={() => addNewAddressState.setTrue()}>Add new address</Button>
		</div>
		<div class="mb-3 grid gap-5 lg:grid-cols-2">
			<Card.Root>
				<Card.Header>
					<Card.Title>Home address</Card.Title>
				</Card.Header>
				<Card.Content>
					<div>
						<p>21 Street, New York, USA</p>
						<p>21 Street, New York, USA</p>
						<p>21 Street, New York, USA</p>
					</div>
					<div class="mt-auto w-[150px] space-y-2">
						<Badge variant="secondary">Shipping Address</Badge>
						<Badge variant="secondary">Billing Address</Badge>
					</div>
				</Card.Content>
				<Card.Footer class="gap-5 pt-1 pb-2 text-sm">
					<Button onclick={() => (deleteModalState = true)} variant="destructive">
						<Trash class="mr-2" />
						<p>Remove</p>
					</Button>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
{:else}
	<div class="flex h-[50vh] w-full flex-col items-center justify-center gap-3 text-center">
		<h1 class="font-display text-3xl font-semibold">You haven't made any address yet</h1>
		<p class="text-muted-foreground">add a new address easily below</p>
		<Button onclick={() => addNewAddressState.setTrue()}>Add new address</Button>
	</div>
{/if}

<AlertDialog.Root bind:open={deleteModalState}>
	<AlertDialog.Content class="w-full  p-5">
		<form action="">
			<AlertDialog.Header class="mt-10">
				<AlertDialog.Title class="font-display text-lg sm:text-xl md:text-3xl  "
					>Are you absolutely sure?</AlertDialog.Title
				>
				<AlertDialog.Description>
					This action cannot be undone. This will permanently delete this address and remove it data
					from our servers.
				</AlertDialog.Description>
			</AlertDialog.Header>
			<AlertDialog.Footer class="mt-5 flex flex-col gap-2">
				<AlertDialog.Cancel type="button" class="w-full">Cancel</AlertDialog.Cancel>
				<AlertDialog.Action type="submit" class="w-full bg-destructive hover:bg-destructive/90">
					Delete addresses
				</AlertDialog.Action>
			</AlertDialog.Footer>
		</form>
	</AlertDialog.Content>
</AlertDialog.Root>
