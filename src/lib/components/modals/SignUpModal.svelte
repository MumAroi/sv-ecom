<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { signUpSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import { signUpModalState } from '@/states/modalState.svelte';

	const form = superForm(defaults(zod(signUpSchema)), {
		validators: zod(signUpSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
</script>

<Dialog.Root bind:open={signUpModalState.value}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Sign Up to your account</Dialog.Title>
		</Dialog.Header>
		<form action="">
			<Form.Field {form} name="name">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Name</Form.Label>
						<Input {...props} bind:value={$fromData.name} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
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
			<Form.Field {form} name="confirmPassword">
				<Form.Control>
					{#snippet children({ props })}
						<Form.Label>Confirm Password</Form.Label>
						<Input {...props} bind:value={$fromData.confirmPassword} />
					{/snippet}
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
			<Form.Button class="mt-2 w-full" type="submit">
				{#if $delayed}
					<Loader2 class="size-5 animate-spin" />
				{:else}
					Sign Up
				{/if}
			</Form.Button>
		</form>
	</Dialog.Content>
</Dialog.Root>
