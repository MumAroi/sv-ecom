<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { resetPasswordSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import { resetPasswordModalState } from '@/states/modalState.svelte';

	const form = superForm(defaults(zod(resetPasswordSchema)), {
		validators: zod(resetPasswordSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
</script>

<Dialog.Root bind:open={resetPasswordModalState.value}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Request to reset your password</Dialog.Title>
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
					Request
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
