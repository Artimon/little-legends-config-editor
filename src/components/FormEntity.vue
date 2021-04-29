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
				<input-text-list label="Ignore Detection Layers" :model="entityConfig.ignoreDetectionLayers" description="Optional: Defines layers that are not considered as blocking." />
				<input-checkbox label="Requires Farmland" :model="entityConfig.requiresFarmland" />

				<input-number label="Hardness" :model="entityConfig.hardness" description="Optional: Hardness to break the entity." />
				<input-text label="Item Name" :model="entityConfig.itemName" description="Optional: The item if the entity has a 1 to 1 item representation." />

				<input-checkbox label="Is Collectable" :model="entityConfig.isCollectable" description="Can be directly picked up without having to break it via tool." />
				<input-text label="Crafting Device Name" :model="entityConfig.craftingDeviceName" description="Optional: Name of the crafting device from the crafting device config." />
				<input-checkbox label="Is Usable" :model="entityConfig.isUsable" description="This entity is usable (activated by secondary mouse button)." />
				<input-number label="Storage Size" :model="entityConfig.storageSize" description="Optional: Storage size of storage containers (currently not working)." />

				<drop-item-list label="Drop Items" :model="entityConfig.dropItems" />
				<breaking-tool label="Breaking Tools" :model="entityConfig.breakingToolConfig"></breaking-tool>
				<input-text label="Mining Audio Collection Name" :model="entityConfig.miningAudioCollectionName" description="Optional: Name of the audio collection from the audio collection config." />

				<input-number label="Decay Time" :model="entityConfig.decayTime" description="Optional: Seconds to decay after placement." />

				<growth label="Growth" :model="entityConfig.growthConfig" />
				<fruit label="Fruit" :model="entityConfig.fruitConfig" />
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
import InputTextList from "../components/form/InputTextList.vue";
import DropItemList from "../components/configs/DropItemList.vue";
import BreakingTool from "../components/configs/BreakingTool.vue";
import Growth from "../components/configs/Growth.vue";
import Fruit from "../components/configs/Fruit.vue";

export default {
	name: "FormEntity",
	components: { InputCheckbox, InputNumber, InputNumberList, InputText, InputTextList, DropItemList, BreakingTool, Growth, Fruit },
	props: {
		entityConfig: Object
	}
}
</script>

<style scoped>

</style>