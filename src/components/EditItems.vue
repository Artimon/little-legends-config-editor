<template>
	<div class="component-edit-items">
		<h2>
			Item Config Core
		</h2>

		<div class="row"
		     v-if="configFiles.loaded">
			<div class="col-md-6"
			     v-for="itemConfig in configFiles.configs.itemConfigCore.itemConfigs">
				<toggle-box :title="itemConfig.name">
					<form-item :itemConfig="itemConfig" />
				</toggle-box>
			</div>
		</div>
	</div>
</template>

<script>
import FormItem from "../components/FormItem.vue";
import ToggleBox from "../components/ToggleBox.vue";
import configFiles from "../js/ConfigFiles";

export default {
	name: "EditItems",
	components: {
		FormItem,
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
.component-edit-items {
	.label-title {
		padding-top: 7px;
		padding-bottom: 7px;
	}
}
</style>