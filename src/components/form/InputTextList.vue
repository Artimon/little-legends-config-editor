<template>
	<label class="row">
		<div class="col-sm-4 label-title">
			{{ label }}
		</div>
		<div class="col-sm-8">
			<div class="row"
				 v-for="(value, index) in model">
				<div class="col">
					<input type="text"
						   class="form-control"
						   v-model="model[index]">
				</div>
				<div class="col">
					<button type="button"
							class="btn btn-primary"
							@click="removeValue(index)">
						Remove
					</button>
				</div>
			</div>

			<button type="button"
					class="btn btn-primary"
					@click="addValue">
				Add Value
			</button>
		</div>
		<div class="col-sm-12"
		     v-if="description">
			<small class="form-text text-muted">
				{{ description }}
			</small>
		</div>
	</label>
</template>

<script>
export default {
	name: "InputTextList",
	props: {
		label: String,
		model: Array,
		description: String
	},
	setup(props) {
		function addValue() {
			props.model.push(undefined);
		}

		/**
		 * @param {number} index
		 */
		function removeValue(index) {
			props.model.splice(index, 1);
		}

		return {
			addValue,
			removeValue
		}
	}
}
</script>

<style scoped>

</style>