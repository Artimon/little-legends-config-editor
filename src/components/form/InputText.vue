<template>
	<label class="row">
		<div class="col-sm-4 label-title">
			{{ label }}
		</div>
		<div class="col-sm-8">
			<input type="text"
			       class="form-control"
			       v-model="model"
			       @change="log(model)">
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
	name: "InputText",
	props: {
		label: String,
		model: String,
		description: String
	},
	setup() {
		return {
			log(message) {
				console.log('Input:', message);
			}
		}
	}
}
</script>

<style scoped>

</style>