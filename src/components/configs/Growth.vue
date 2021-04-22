<template>
	<div class="component-growth">
		<h5>
			{{ label }}
		</h5>

		<div class="row">
			<div class="col offset-1">
				<input-text label="Grows Into Actor Name" :model="model.growsIntoActorName" description="Name of the actor to grow into (exclusive from entity and states)." />
				<input-text label="Grows Into Entity Name" :model="model.growsIntoEntityName" description="Name of the entity to grow into (exclusive from actor and states)." />
				<input-number label="States" :model="model.states" description="Amount of growth states without morph (exclusive from actor and entity)." />
				<input-number label="Time" :model="model.time" description="Total growth time (varying by natural progress for vegetation)." />
			</div>
		</div>
	</div>
</template>

<script>
import InputNumber from "../form/InputNumber.vue";
import InputText from "../form/InputText.vue";

export default {
	name: "Growth",
	components: { InputNumber, InputText },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-growth {
	padding: 30px 0;
}
</style>