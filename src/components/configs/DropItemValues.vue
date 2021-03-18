<template>
<div class="component-drop-item-values">
	<input-text label="Item Name" :model="model.itemName" @change="log(model.itemName)" description="The item to drop." />
	<input-number label="Min. Amount" :model="model.minAmount" description="Optional: Only when probability is not set!" />
	<input-number label="Max. Amount" :model="model.maxAmount" description="Optional: Only when probability is not set!" />
	<input-number label="Probability" :model="model.probability" description="Optional: Overwrites min./max. amount drop config, if given." />
	<input-checkbox label="Growth Finished" :model="model.growthFinished" description="Only drops the item for fully grown plants, when checked." />
</div>
</template>

<script>
import InputCheckbox from "../../components/form/InputCheckbox.vue";
import InputNumber from "../../components/form/InputNumber.vue";
import InputText from "../../components/form/InputText.vue";

export default {
	name: "DropItemValues",
	components: { InputCheckbox, InputNumber, InputText },
	props: {
		model: Object
	},
	setup() {
		return {
			log(message) {
				console.log('Drop Item:', message, this.model.itemName);
			}
		}
	}
}
</script>

<style lang="scss">
.component-drop-item-values {
	margin-top: 20px;
	padding-top: 20px;

	border-top: 1px solid #444;
}
</style>