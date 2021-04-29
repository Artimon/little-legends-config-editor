import { reactive } from 'vue';

let configFiles;

class ConfigFiles {
	async openDirectory() {
		this._fileSystemDirectoryHandle = await window.showDirectoryPicker();

		this._fileHandles = await Promise.all([
			this._fileSystemDirectoryHandle.getFileHandle("Entities.json")
		]);

		let file = await this._fileHandles[0].getFile();
		let text = await file.text();

		this.configs = {
			entityConfigCore: JSON.parse(text)
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
		});

		console.log(this.configs.entityConfigCore);

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
}

configFiles = reactive(new ConfigFiles());

export default configFiles;