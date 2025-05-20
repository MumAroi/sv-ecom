<script lang="ts">
	import * as Card from '@/components/ui/card';
	import * as Form from '@/components/ui/form';
	import { Input } from '@/components/ui/input';
	import { Button } from '@/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { superForm } from 'sveltekit-superforms';
	import { categorySchema } from '@/formSchema';
	import { X } from '@lucide/svelte';

	const { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(categorySchema),
		dataType: 'json'
	});
	const { delayed, errors, enhance, form: fromData } = form;

	let subcategoryInput = $state('');

	function handleSubcategories(e: Event) {
		const input = e.target as HTMLInputElement;
		const value = input.value;
		if (value.endsWith(' ')) {
			const trimmedWord = value.trim();
			if (trimmedWord && !$fromData.subcategories.includes(trimmedWord)) {
				$fromData.subcategories = [...$fromData.subcategories, trimmedWord];
				subcategoryInput = '';
			}
		}
	}

	function removeSubcategory(index: number) {
		$fromData.subcategories = $fromData.subcategories.filter((_, i) => i !== index);
	}
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight capitalize">Add New Category</h2>
	</div>
	<form action="" method="post">
		<Card.Root>
			<Card.Header>
				<Card.Title>Category Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="name">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Category Name</Form.Label>
								<Input {...props} bind:value={$fromData.name} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="description">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Description</Form.Label>
								<Input {...props} bind:value={$fromData.description} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="subcategories">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Subcategories</Form.Label>
								{#if $fromData.subcategories.length > 0}
									<div class="mb-2 flex flex-wrap gap-2">
										{#each $fromData.subcategories as subcategory, index}
											<Badge>
												{subcategory}
												<Button
													class="ml-1.5 hover:text-red-500"
													type="button"
													onclick={() => removeSubcategory(index)}
												>
													<X class="size-3" />
												</Button>
											</Badge>
										{/each}
									</div>
								{/if}
								<Input
									{...props}
									bind:value={subcategoryInput}
									oninput={handleSubcategories}
									placeholder="type subcategory and press space to add"
								/>
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<Button type="submit">Add Category</Button>
			</Card.Content>
		</Card.Root>
	</form>
</div>
