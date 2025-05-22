<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { signInSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import { resetPasswordModalState, signInModalState } from '@/states/modalState.svelte';

	const form = superForm(defaults(zod(signInSchema)), {
		validators: zod(signInSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
</script>

<Dialog.Root bind:open={signInModalState.value}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Sign In to your account</Dialog.Title>
			<Dialog.Description>
				Enter your email and password to sign in., click sign in when you ready
			</Dialog.Description>
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
			<Form.Field {form} name="password">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Password</Form.Label>
						<Input {...props} bind:value={$fromData.password} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<button
				type="button"
				class="text-primary text-sm"
				onclick={() => {
					signInModalState.setFalse();
					resetPasswordModalState.setTrue();
				}}
			>
				forgot your password?</button
			>
			<Form.Button class="mt-2 w-full" type="submit">
				{#if $delayed}
					<Loader2 class="size-5 animate-spin" />
				{:else}
					Sign In
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
