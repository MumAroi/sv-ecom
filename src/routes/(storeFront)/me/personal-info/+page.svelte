<script lang="ts">
	import { page } from '$app/state';
	import { getUserInitial } from '@/utils.js';

	const { data } = $props();
</script>

<section class="flex gap-10">
	<div class="flex flex-col items-center gap-3">
		<div class="h-[4rem] w-[3rem] rounded-full bg-white p-1 shadow-lg md:h-[6.5rem] md:w-[6.5rem]">
			<div
				class="relative flex h-full w-full items-center justify-center rounded-full bg-[#FAE9C7]"
			>
				<p class="text-2xl font-medium text-[#b6b5b1] capitalize lg:text-4xl">
					{getUserInitial('john doe')}
				</p>
			</div>
		</div>
	</div>
	<div class="flex flex-col gap-3">
		<h1 class="font-display text-lg font-semibold capitalize md:text-2xl">John Done</h1>
		<div class="flex flex-col">
			<h2 class="text-sm font-semibold md:text-base">Email</h2>
			<p class="text-sm font-normal md:text-base">john.doe@gmail.com</p>
		</div>
	</div>
</section>
