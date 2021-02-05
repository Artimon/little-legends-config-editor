<template>
	<div class="component-config-files component-spacing">
		<div class="container-fluid">
			<button type="button"
			        class="btn btn-primary"
			        @click="openDirectory">
				Open Config Folder
			</button>
		</div>
	</div>
</template>

<script>
import configFiles from "../js/ConfigFiles";

export default {
	name: "OpenFolder",
	setup() {
		async function openDirectory(event) {
			await configFiles.openDirectory();
		}

		return {
			openDirectory
		};
	}
}
</script>

<style scoped>
</style>