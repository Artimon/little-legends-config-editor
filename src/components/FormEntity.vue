<template>
	<form>
		<fieldset>
			<div class="form-group">
				<input-text label="Entity Name" :model="entityConfig.name" />
				<input-number label="Size X" :model="entityConfig.sizeX" />
				<input-number label="Size Y" :model="entityConfig.sizeY" />
				<input-checkbox label="Blocking" :model="entityConfig.blocking" description="Non-blocking entities can spawn multiple times on the same field (e.g. Grass)." />
				<input-checkbox label="Use Ground Breaking" :model="entityConfig.useGroundBreaking" description="Use the hardness of the ground for breaking the entity." />
				<input-number label="Hardness" :model="entityConfig.hardness" description="Hardness to break the entity." />
				<input-text label="Item Name" :model="entityConfig.itemName" description="The item if the entity has a 1 to 1 item representation." />
				<input-number label="Decay Time" :model="entityConfig.decayTime" description="Seconds to decay after placement." />
			</div>
		</fieldset>
	</form>
</template>

<script>
import InputCheckbox from "../components/form/InputCheckbox.vue";
import InputNumber from "../components/form/InputNumber.vue";
import InputText from "../components/form/InputText.vue";

export default {
	name: "FormEntity",
	components: {InputCheckbox, InputText, InputNumber},
	props: {
		entityConfig: Object
	}
}
</script>

<style scoped>

</style>