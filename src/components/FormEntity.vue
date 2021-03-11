<template>
	<form>
		<fieldset>
			<div class="form-group">
				<input-text label="Entity Name" :model="entityConfig.name" />
				<input-text label="Prefab Path" :model="entityConfig.prefabPath" description="Relative path in the Resources folder to access the asset database." />
				<input-text label="Sprite Path Raw" :model="entityConfig.spritePathRaw" description='Optional for entities with multiple sprite options. Add "{variation}" as *slot.' />

				<input-number label="Indicator Pivot X" :model="entityConfig.indicatorPivotX" description="Optional: Only necessary when the sprite does not center properly at the mouse position." />
				<input-number label="Indicator Pivot Y" :model="entityConfig.indicatorPivotY" description="Optional: Only necessary when the sprite does not center properly at the mouse position." />
				<input-number label="Size X" :model="entityConfig.sizeX" />
				<input-number label="Size Y" :model="entityConfig.sizeY" />

				<input-number label="Multi Spawn" :model="entityConfig.multiSpawn" description="Optional: Spawns up to n entities at the same field. Requires blocking to be disabled and should have randomized spawn position enabled." />
				<input-checkbox label="Randomize Spawn Position" :model="entityConfig.randomizeSpawnPosition" description="Spawns the entity at a random position inside the spawn field." />
				<input-checkbox label="Blocking" :model="entityConfig.blocking" description="Non-blocking entities can spawn multiple times on the same field (e.g. Grass)." />

				<input-checkbox label="Use Ground Breaking" :model="entityConfig.useGroundBreaking" description="Use the hardness of the ground for breaking the entity." />
				<input-number-list label="Terrain Layers" :model="entityConfig.terrainLayers" description="Optional: Restricts entity placement to given layers." />

				<input-number label="Hardness" :model="entityConfig.hardness" description="Hardness to break the entity." />
				<input-text label="Item Name" :model="entityConfig.itemName" description="The item if the entity has a 1 to 1 item representation." />
				<input-number label="Decay Time" :model="entityConfig.decayTime" description="Seconds to decay after placement." />
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
import InputCheckbox from "../components/form/InputCheckbox.vue";
import InputNumber from "../components/form/InputNumber.vue";
import InputNumberList from "../components/form/InputNumberList.vue";
import InputText from "../components/form/InputText.vue";

export default {
	name: "FormEntity",
	components: { InputCheckbox, InputText, InputNumber, InputNumberList },
	props: {
		entityConfig: Object
	}
}
</script>

<style scoped>

</style>