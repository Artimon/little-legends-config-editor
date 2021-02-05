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
					<form>
						<fieldset>
							<div class="form-group">
								<label class="row">
									<div class="col-sm-4 label-title">
										Entity Name
									</div>
									<div class="col-sm-8">
										<input type="text"
										       class="form-control"
										       v-model="entityConfig.name">
									</div>
								</label>
							</div>
						</fieldset>
					</form>
				</toggle-box>
			</div>
		</div>
	</div>
</template>

<script>
import ToggleBox from "../components/ToggleBox.vue";
import configFiles from "../js/ConfigFiles";

export default {
	name: "EditEntities",
	components: {
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