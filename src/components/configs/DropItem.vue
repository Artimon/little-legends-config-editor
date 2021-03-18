<template>
	<div class="component-drop-item">
		<h5>
			{{ label }}
		</h5>

		<div class="row"
			 v-if="model">
			<div class="col offset-1">
				<drop-item-values :model="model"></drop-item-values>
			</div>
		</div>
	</div>
</template>

<script>
import DropItemValues from "./DropItemValues.vue";

export default {
	name: "DropItem",
	components: { DropItemValues },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-drop-item {
	padding: 30px 0;
}
</style>