<template>
	<div class="component-fruit">
		<h5>
			{{ label }}
		</h5>

		<div class="row">
			<div class="col offset-1">
				<drop-item label="Drop Item" :model="model.dropItemConfig"></drop-item>
				<input-number label="Time" :model="model.time" description="Time source for natural growth." />
			</div>
		</div>
	</div>
</template>

<script>
import InputNumber from "../form/InputNumber.vue";
import DropItem from "./DropItem.vue";

export default {
	name: "Fruit",
	components: { InputNumber, DropItem },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-fruit {
	padding: 30px 0;
}
</style>