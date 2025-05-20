<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
</script>

<div class="space-y-4 p-8">
	<div class="flex items-center justify-between space-y-2">
		<h2 class="text-3xl font-bold tracking-tight capitalize">Users</h2>
		<div class="flex items-center space-x-2">
			<Input class="w-[150px] lg:w-[250px]" placeholder="Search users..." />
			<Button href="users/add">Add User</Button>
		</div>
	</div>

	<Table.Root>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[100px]">Name</Table.Head>
				<Table.Head>Email</Table.Head>
				<Table.Head>Role</Table.Head>
				<Table.Head>Status</Table.Head>
				<Table.Head>Join Date</Table.Head>
				<Table.Head>Total spent</Table.Head>
				<Table.Head class="text-right">Actions</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			<Table.Row>
				<Table.Cell class="font-medium">John Doe</Table.Cell>
				<Table.Cell>john.doe@example.com</Table.Cell>
				<Table.Cell>Admin</Table.Cell>
				<Table.Cell>Active</Table.Cell>
				<Table.Cell>11-02-2022</Table.Cell>
				<Table.Cell>$500</Table.Cell>
				<Table.Cell class="text-right">
					<Button variant="destructive" size="sm">Ban user</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	</Table.Root>
</div>
