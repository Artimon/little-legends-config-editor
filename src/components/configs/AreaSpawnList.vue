<template>
	<div class="component-area-spawn-list">
		<h5>
			{{ label }}
		</h5>

		<div class="row"
			 v-for="(childModel, index) in model"
			 :key="childModel">
			<div class="col offset-1">
				<area-spawn :model="childModel"></area-spawn>

				<button type="button"
						class="btn btn-primary"
						@click="removeEntry(index)">
					Remove
				</button>
			</div>
		</div>

		<div class="row">
			<div class="col offset-1">
				<div class="item-add-separator"
					 v-if="model.length > 0"></div>

				<button type="button"
						class="btn btn-primary"
						@click="addEntry">
					Add Entry
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import AreaSpawn from "./AreaSpawn.vue";

export default {
	name: "AreaSpawnList",
	components: { AreaSpawn },
	props: {
		label: String,
		model: Array
	},
	setup(props) {
		function addEntry() {
			props.model.push({
				entityName: '',
				factor: 0,
				range: 0,
				amount: 0
			});
		}

		/**
		 * @param {number} index
		 */
		function removeEntry(index) {
			if (confirm("Remove this entry?")) {
				props.model.splice(index, 1);
			}
		}

		return {
			addEntry,
			removeEntry
		}
	}
}
</script>

<style lang="scss">
.component-area-spawn-list {
	padding: 30px 0;

	.item-add-separator {
		margin: 20px 0;

		border-top: 1px solid #444;
	}
}
</style>