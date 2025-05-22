<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import {
		mobileAuthModalState,
		signInModalState,
		signUpModalState
	} from '@/states/modalState.svelte';
	import { Button } from '../ui/button';
</script>

<Dialog.Root bind:open={mobileAuthModalState.value}>
	<Dialog.Content class="w-full p-5">
		<Dialog.Header class="mt-10">
			<Dialog.Title>Sign In to your account</Dialog.Title>
		</Dialog.Header>
		<Button
			variant="ghost"
			onclick={() => {
				mobileAuthModalState.setFalse();
				signInModalState.setTrue();
			}}>Sign In</Button
		>
		<Button
			onclick={() => {
				mobileAuthModalState.setFalse();
				signUpModalState.setTrue();
			}}>Sign Up</Button
		>
	</Dialog.Content>
</Dialog.Root>
