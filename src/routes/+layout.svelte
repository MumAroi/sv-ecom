<script lang="ts">
	import '../app.css';
	import NProgress from 'nprogress';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	const { children } = $props();

	afterNavigate(() => {
		NProgress.start();
	});

	beforeNavigate(() => {
		NProgress.done();
	});

	NProgress.configure({ showSpinner: false });
</script>

{@render children()}
