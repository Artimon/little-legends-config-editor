<template>
	<div class="component-area-spawn">
		<h5>
			{{ label }}
		</h5>

		<div class="row">
			<div class="col offset-1">
				<input-text label="Entity Name" :model="model.entityName" description="Name of the entity to spawn in the area." />
				<input-number label="Factor" :model="model.factor" description="Factor 0 to 1 as chance of spawning entities." />
				<input-number label="Range" :model="model.range" description="Range around the spawn position (square)." />
				<input-number label="Amount" :model="model.amount" description="Total growth time (varying by natural progress for vegetation)." />
			</div>
		</div>
	</div>
</template>

<script>
import InputNumber from "../form/InputNumber.vue";
import InputText from "../form/InputText.vue";

export default {
	name: "AreaSpawn",
	components: { InputNumber, InputText },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-area-spawn {
	padding: 30px 0;
}
</style>