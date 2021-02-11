<template>
	<div class="form-check">
		<label>
			<input type="checkbox"
			       class="form-check-input"
			       v-model="model">
			{{ label }}

			<small class="form-text text-muted"
			       v-if="description">
				{{ description }}
			</small>
		</label>
	</div>
</template>

<script>
export default {
	name: "InputCheckbox",
	props: {
		label: String,
		model: Boolean,
		description: String
	}
}
</script>

<style scoped>

</style>