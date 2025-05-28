<script lang="ts">
	import UpdateEmailModal from '@/components/modals/UpdateEmailModal.svelte';
	import UpdateNameModal from '@/components/modals/UpdateNameModal.svelte';
	import UpdatePasswordModal from '@/components/modals/UpdatePasswordModal.svelte';
	import { Button } from '@/components/ui/button';

	const { date } = $props();
</script>

<div class="m-auto flex w-full max-w-[900px] flex-col gap-5 px-2 md:px-10">
	<div class="flex w-full justify-between gap-5 border-b pb-3">
		<p class="text-base font-semibold md:text-lg">email</p>
		<UpdateEmailModal />
	</div>
	<div class="flex w-full justify-between gap-5 border-b pb-3">
		<p class="text-base font-semibold md:text-lg">Name</p>
		<UpdateNameModal />
	</div>
	<div class="flex w-full justify-between gap-5 border-b pb-3">
		<p class="text-base font-semibold md:text-lg">Password</p>
		<UpdatePasswordModal />
	</div>
	<div class="flex w-full justify-between gap-5 border-b pb-3">
		<p class="text-base font-semibold md:text-lg">Logout of store</p>
		<Button variant="link">Logout</Button>
	</div>
</div>
