import { reactive } from 'vue';

let configFiles;

class ConfigFiles {
	async openDirectory() {
		this._fileSystemDirectoryHandle = await window.showDirectoryPicker();
		this.configs = {
			entityConfigCore: await this._getFileText("Entities.json"),
			itemConfigCore: await this._getFileText("Items.json")
		};
		this.loaded = true;

		this.configs.entityConfigCore.entityConfigs.forEach((entityConfig) => {
			if (!entityConfig.breakingToolConfig) {
				entityConfig.breakingToolConfig = {
					types: [],
					level: 0
				};
			}

			if (!entityConfig.growthConfig) {
				entityConfig.growthConfig = {
					growsIntoActorName: undefined,
					growsIntoEntityName: undefined,
					states: undefined,
					time: 0
				};
			}

			if (!entityConfig.fruitConfig) {
				entityConfig.fruitConfig = {
					dropItemConfig: {
						itemName: "",
						minAmount: 0,
						maxAmount: 0,
						probability: 0,
						growthFinished: false
					},
					time: 0
				};
			}

			if (!entityConfig.actorSpawnConfig) {
				entityConfig.actorSpawnConfig = {
					actorName: "",
					duration: 0,
					removeOnSpawn: false,
					addEffectMining: false
				};
			}

			entityConfig.areaSpawns = entityConfig.areaSpawns || [];
		});

		console.log(this.configs);

		//let fileSystemDirectoryHandle = await window.showDirectoryPicker();

		//console.log(fileSystemDirectoryHandle);

		// showDirectoryPicker().then((fileSystemDirectoryHandle) => { window.tmp = fileSystemDirectoryHandle })
		//
		// fileHandle = await tmp.getFileHandle("Entities.json");
		//
		// file = await fileHandle.getFile()
		//
		// file.text()
		//
		//
		//
		// wirtable = await fileHandle.createWritable()
		// await wirtable.write('lol')
		// await wirtable.close()
	}

	/**
	 * @param {string} fileName
	 * @returns {Promise<*>}
	 */
	async _getFileText(fileName) {
		let fileHandle = await this._fileSystemDirectoryHandle.getFileHandle(fileName),
			file = await fileHandle.getFile(),
			text = await file.text();

		return JSON.parse(text);
	}
}

configFiles = reactive(new ConfigFiles());

export default configFiles;