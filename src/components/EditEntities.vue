<template>
	<div class="component-edit-entities">
		<h2>
			EntityConfigCore
		</h2>

		<div class="row"
		     v-if="configFiles.loaded">
			<div class="col-md-6"
			     v-for="entityConfig in configFiles.configs.entityConfigCore.entityConfigs">
				<toggle-box :title="entityConfig.name">
					<form-entity :entityConfig="entityConfig" />
				</toggle-box>
			</div>
		</div>
	</div>
</template>

<script>
import FormEntity from "../components/FormEntity.vue";
import ToggleBox from "../components/ToggleBox.vue";
import configFiles from "../js/ConfigFiles";

export default {
	name: "EditEntities",
	components: {
		FormEntity,
		ToggleBox
	},
	setup() {
		return {
			configFiles
		}
	}
}
</script>

<style lang="scss">
.component-edit-entities {
	.label-title {
		padding-top: 7px;
		padding-bottom: 7px;
	}
}
</style>