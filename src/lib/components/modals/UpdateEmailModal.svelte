<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { updateEmailSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import { buttonVariants } from '../ui/button';

	const form = superForm(defaults(zod(updateEmailSchema)), {
		validators: zod(updateEmailSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
	let modalState = $state(false);
</script>

<Dialog.Root bind:open={modalState}>
	<Dialog.Trigger class={buttonVariants({ variant: 'link' })}>Change Email</Dialog.Trigger>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title class="font-display text-3xl ">Change Email</Dialog.Title>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="email">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Email</Form.Label>
						<Input {...props} bind:value={$fromData.email} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="mt-2 w-full" type="submit">
				{#if $delayed}
					<Loader2 class="size-5 animate-spin" />
				{:else}
					Update Email
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
