<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from '$lib/components/ui/avatar';
	import Button from './ui/button/button.svelte';
	import { Menu, ShoppingCart } from '@lucide/svelte';
	import SignInModal from './modals/SignInModal.svelte';
	import SignUpModal from './modals/SignUpModal.svelte';
	import MobileAuthModal from './modals/MobileAuth.svelte';
	import ResetPasswordModal from './modals/ResetPassword.svelte';
	import {
		cartSheetState,
		mobileAuthModalState,
		signInModalState,
		signUpModalState
	} from '@/states/modalState.svelte';
	import CartSheet from './modals/CartSheet.svelte';

	const user = true;
	const isAdmin = false;
	const accountPages = [
		{
			title: 'Profile',
			href: '/me/personal-info'
		},
		{
			title: 'Order history',
			href: '/me/order-history'
		},

		{
			title: 'Addresses',
			href: '/me/addresses'
		},
		{
			title: 'Settings',
			href: '/me/settings'
		}
	];

	function getUserInitials(name: string) {
		return name
			.split(' ')
			.map((n) => n[0])
			.join('');
	}
</script>

<header
	class="bg-background sticky top-0 left-0 z-50 flex items-center justify-between border px-3 py-3 md:px-10"
>
	<a href="/" class="text-2xl capitalize">
		<span class="text-primary font-bold">My Svelte</span>
		<span>Store</span>
	</a>
	<div class="flex items-center gap-2 md:gap-6">
		{#if user}
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="User" />
						<Avatar.Fallback>{getUserInitials('John Doe')}</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						{#each accountPages as { href, title }}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a {href} {...props}>{title}</a>
								{/snippet}
							</DropdownMenu.Item>
						{/each}
						{#if isAdmin}
							<DropdownMenu.Item>
								{#snippet child({ props })}
									<a href="/admin" {...props}>Admin Dashboard</a>
								{/snippet}
							</DropdownMenu.Item>
						{/if}
						<DropdownMenu.Separator />
						<DropdownMenu.Item>
							{#snippet child({ props })}
								<a href="/logout" {...props}>Logout</a>
							{/snippet}
						</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		{:else}
			<div class="hidden items-center gap-2 md:flex">
				<Button variant="ghost" onclick={() => signInModalState.setTrue()}>Sign In</Button>
				<Button onclick={() => signUpModalState.setTrue()}>Sign Up</Button>
			</div>
			<button
				class="hover:bg-secondary flex size-10 items-center justify-center rounded-full md:hidden"
				onclick={() => mobileAuthModalState.setTrue()}
			>
				<Menu class="size-6" />
			</button>
		{/if}
		{#if user}
			<button class="inline-blox relative h-fit w-fit" onclick={() => cartSheetState.setTrue()}>
				<div
					class="bg-primary absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full text-xs text-white"
				>
					5
				</div>
				<ShoppingCart class="size-6" />
			</button>
		{/if}
	</div>
</header>

<SignInModal />
<SignUpModal />
<MobileAuthModal />
<ResetPasswordModal />
<CartSheet />
