<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>
<ul>
    <li>ID: {data.user.DisplayUserID}</li>
    <li>Name: {data.user.UserName}</li>
    <li>Profile: {data.user.ProfileText}</li>
</ul>