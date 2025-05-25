<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet';
	import { Button } from '../ui/button';
	import { cartSheetState } from '@/states/modalState.svelte';
</script>

<div>
	<Sheet.Root bind:open={cartSheetState.value}>
		<Sheet.Content>
			<Sheet.Header>
				<Sheet.Title>Your order</Sheet.Title>
			</Sheet.Header>
			<p class="my-5 capitalize md:my-0">Total: $500</p>
			<Sheet.Footer>
				<Button>Proceed to Checkout</Button>
			</Sheet.Footer>
		</Sheet.Content>
	</Sheet.Root>
</div>
