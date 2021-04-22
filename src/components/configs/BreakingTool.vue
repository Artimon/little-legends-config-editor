<template>
	<div class="component-breaking-tool">
		<h5>
			{{ label }}
		</h5>

		<div class="row">
			<div class="col offset-1">
				<input-text-list label="Tool Types" :model="model.types" description="All types (not names!) of tools that are can break this." />
				<input-number label="Level" :model="model.level" description="Minimum required tool level." />
			</div>
		</div>
	</div>
</template>

<script>
import InputNumber from "../form/InputNumber.vue";
import InputTextList from "../form/InputTextList.vue";

export default {
	name: "BreakingTool",
	components: { InputNumber, InputTextList },
	props: {
		label: String,
		model: Object
	}
}
</script>

<style lang="scss">
.component-breaking-tool {
	padding: 30px 0;
}
</style>