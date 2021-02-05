<template>
	<div class="component-toggle-box">
		<div class="card text-white bg-dark">
			<div class="card-header"
			     @click="open = !open">
				{{title}}
			</div>
			<div class="card-body"
			     v-show="open">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
import _ from "lodash";
import { ref, computed } from 'vue';

export default {
	name: "ToggleBox",
	props: {
		title: String
	},
	setup(props) {
		let open = ref(false);

		const title = computed(() => {
			return _.startCase(props.title);
		});

		return {
			title,
			open
		}
	}
}
</script>

<style lang="scss">
.component-toggle-box {
	.card-header {
		font-weight: bold;
		cursor: pointer;
	}
}
</style>