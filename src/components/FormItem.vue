<template>
	<form>
		<fieldset>
			<div class="form-group">
				<input-text label="Item Name" :model="itemConfig.name" />
			</div>
		</fieldset>
	</form>

	<ul>
		<li>
			slot: Binary-based number set for connecting fences, for example.
		</li>
	</ul>
</template>

<script>
import InputText from "../components/form/InputText.vue";

export default {
	name: "FormItem",
	components: { InputText },
	props: {
		itemConfig: Object
	}
}
</script>

<style scoped>

</style>