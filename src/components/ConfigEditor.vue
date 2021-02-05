<template>
	<div class="component-config-editor">
		<div class="container-fluid">
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a class="nav-link active" href="#">
						Entities
					</a>
				</li>
			</ul>
			<div class="tab-content">
				<div class="tab-pane fade active show">
					<edit-entities></edit-entities>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import EditEntities from "../components/EditEntities.vue";

export default {
	name: "ConfigEditor",
	components: {
		EditEntities
	},
	setup() {
		return {
		}
	}
}
</script>

<style scoped>

</style>