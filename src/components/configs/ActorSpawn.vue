<template>
	<div class="component-actor-spawn">
		<h5>
			{{ label }}
		</h5>

		<div class="row">
			<div class="col offset-1">
				<input-text label="Actor Name" :model="model.actorName" />
				<input-number label="Duration" :model="model.duration" description="Time source for natural growth." />
				<input-checkbox label="Remove on Spawn" :model="model.removeOnSpawn" description="Remove the entity on actor spawn." />
				<input-checkbox label="Add Effect Mining" :model="model.addEffectMining" description="Add the default mining effect particles." />
			</div>
		</div>
	</div>
</template>

<script>
import InputCheckbox from "../form/InputCheckbox.vue";
import InputNumber from "../form/InputNumber.vue";
import InputText from "../form/InputText.vue";

export default {
	name: "Fruit",
	components: { InputCheckbox, InputNumber, InputText },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-actor-spawn {
	padding: 30px 0;
}
</style>