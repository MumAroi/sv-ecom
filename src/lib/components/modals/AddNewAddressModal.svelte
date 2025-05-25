<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { addressSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import { addNewAddressState } from '@/states/modalState.svelte';
	import { Checkbox } from '../ui/checkbox';

	const form = superForm(defaults(zod(addressSchema)), {
		validators: zod(addressSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
</script>

<Dialog.Root bind:open={addNewAddressState.value}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Add Address</Dialog.Title>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Lable</Form.Label>
						<span class="font-bold text-red-600">*</span>
						<Input {...props} bind:value={$fromData.name} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="address">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Address</Form.Label>
						<span class="font-bold text-red-600">*</span>
						<Input {...props} bind:value={$fromData.address} />
					{/snippet}
				</Form.Control>
			</Form.Field>
			<Form.Field {form} name="state">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>State</Form.Label>
						<Input {...props} bind:value={$fromData.state} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="country">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Country</Form.Label>
						<Input {...props} bind:value={$fromData.country} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field
				{form}
				name="isDefaultShipping"
				class="flex flex-row items-start space-y-0 space-x-3  p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<Checkbox {...props} bind:checked={$fromData.isDefaultShipping} />
						<div class="space-y-1 leading-none">
							<Form.Label>Use as default shipping address</Form.Label>
						</div>
						<input name={props.name} value={$fromData.isDefaultShipping} hidden />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field
				{form}
				name="isDefaultBilling"
				class="flex flex-row items-start space-y-0 space-x-3  p-4"
			>
				<Form.Control>
					{#snippet children({ props })}
						<Checkbox {...props} bind:checked={$fromData.isDefaultBilling} />
						<div class="space-y-1 leading-none">
							<Form.Label>Use as default Billing address</Form.Label>
						</div>
						<input name={props.name} value={$fromData.isDefaultBilling} hidden />
					{/snippet}
				</Form.Control>
			</Form.Field>
			<Form.Button class="mt-2 w-full" type="submit">
				{#if $delayed}
					<Loader2 class="size-5 animate-spin" />
				{:else}
					Add
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
