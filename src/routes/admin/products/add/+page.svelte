<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { filesProxy, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { productSchema } from '$lib/formSchema';
	import { Button } from '$lib/components/ui/button';
	import { Loader2 } from '@lucide/svelte';

	const { data } = $props();
	const form = superForm(data.form, {
		validators: zodClient(productSchema),
		validationMethod: 'auto'
	});
	const { delayed, errors, enhance, form: fromData } = form;
	const images = filesProxy(form, 'images');
	const previews = $derived(Array.from($images).map((file) => URL.createObjectURL(file)));
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight capitalize">Add New Product</h2>
	</div>

	<form action="" method="post" enctype="multipart/form-data">
		<Card.Root>
			<Card.Header>
				<Card.Title>Product Information</Card.Title>
			</Card.Header>
			<Card.Content class="space-y-4">
				<Form.Field {form} name="name">
					<Form.Control>
						{#snippet children({ props })}
							<Form.Label>Name</Form.Label>
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
				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="price">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Price</Form.Label>
								<Input {...props} type="number" bind:value={$fromData.price} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="stock">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Stock</Form.Label>
								<Input {...props} type="number" bind:value={$fromData.stock} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div class="grid grid-cols-2 gap-4">
					<Form.Field {form} name="category">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Category</Form.Label>
								<Input {...props} type="number" bind:value={$fromData.category} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
					<Form.Field {form} name="subCategory">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Sub Category</Form.Label>
								<Input {...props} type="number" bind:value={$fromData.subCategory} />
							{/snippet}
						</Form.Control>
						<Form.FieldErrors />
					</Form.Field>
				</div>
				<div class="grid w-full max-w-sm items-center gap-1.5">
					<Form.Field {form} name="images">
						<Form.Control>
							{#snippet children({ props })}
								<Form.Label>Images</Form.Label>
								<Input
									{...props}
									type="file"
									accept="image/png, image/jpeg"
									multiple
									bind:files={$images}
								/>
							{/snippet}
						</Form.Control>
						{#if $errors.images}
							{#each $errors.images[0] as error}
								<p class="text-red-500">{error}</p>
							{/each}
						{/if}
					</Form.Field>
				</div>
				<div class="grid w-fit grid-cols-3 gap-2">
					{#each previews as preview}
						<img src={preview} alt="" class="bottom-2 size-20 rounded-md" />
					{/each}
				</div>
				<Button type="submit">
					{#if $delayed}
						<Loader2 class="size-5 animate-spin" />
					{:else}
						Add Product
					{/if}
				</Button>
			</Card.Content>
		</Card.Root>
	</form>
</div>
