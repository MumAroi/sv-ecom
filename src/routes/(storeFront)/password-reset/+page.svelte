<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { resetPasswordFormSchema } from '@/formSchema';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Loader2 } from '@lucide/svelte';
	import * as Card from '$lib/components/ui/card';

	const form = superForm(defaults(zod(resetPasswordFormSchema)), {
		validators: zod(resetPasswordFormSchema),
		SPA: true
	});

	const { delayed, errors, enhance, form: fromData } = form;
</script>

<div class="mt-5 grid h-[70vh] w-full place-items-center">
	<Card.Root>
		<Card.Header>
			<Card.Title>Reset your password</Card.Title>
		</Card.Header>
		<Card.Content>
			<form action="">
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
						Submit
					{/if}
				</Form.Button>
			</form>
		</Card.Content>
	</Card.Root>
</div>
