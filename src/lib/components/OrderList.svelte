<script lang="ts">
	import { Minus, Plus, Trash } from '@lucide/svelte';
	import { Button } from './ui/button';
</script>

<div class="grid gap-4 py-4">
	<form out:fly={{ x: 200, duration: 300 }} action="">
		<div
			class="flex justify-between gap-2 rounded-lg px-1 py-3 transition-colors hover:bg-slate-50"
		>
			<img
				class="h-24 w-36 overflow-hidden rounded-xl object-cover"
				src="/hero/hero-2.jpg"
				alt=""
			/>
			<div class="flex-1 space-y-1">
				<p class="font-semibold capitalize">Black Chair</p>
				<p class="text-muted-foreground h-10 w-[150px] truncate text-xs">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
					consectetur adipisicing elit.
				</p>
				<p class="text-primary text-sm">$100</p>
			</div>
			<div class="flex items-center gap-2">
				<Button size="icon"><Minus /></Button>
				<button
					class="border-border flex h-10 w-10 items-center justify-center rounded-md border-2"
				>
					1
				</button>
				<Button size="icon"><Plus /></Button>
			</div>
		</div>
		<Button
			variant="outline"
			size="sm"
			class="border-destructive bg-destructive/5 text-destructive hover:bg-destructive/5 hover:text-destructive w-fit"
			type="submit"
		>
			<Trash class="mr-3 size-4 " />

			Delete item
		</Button>
	</form>
</div>
