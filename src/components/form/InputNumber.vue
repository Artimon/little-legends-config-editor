<template>
	<label class="row">
		<div class="col-sm-4 label-title">
			{{ label }}
		</div>
		<div class="col-sm-8">
			<input type="number"
			       class="form-control"
			       v-model="model">
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
	name: "InputNumber",
	props: {
		label: String,
		model: Number,
		description: String
	}
}
</script>

<style scoped>

</style>