<template>
	<div class="component-tabs">
		<ul class="nav nav-tabs">
			<li class="nav-item"
			    v-for="tab in tabs"
			    v-on:click="activateTab(tab)">
				<a class="nav-link"
				   href="#"
				   v-bind:class="{ active: tab.active }">
					{{ tab.title }}
				</a>
			</li>
		</ul>
		<div class="tab-content">
			<div class="tab-pane fade show"
			     v-for="tab in tabs"
			     v-bind:class="{ active: tab.active }">
				<component :is="tab.componentName"></component>
			</div>
		</div>
	</div>
</template>

<script>
import EditEntities from "../components/EditEntities.vue";
import EditItems from "../components/EditItems.vue";

export default {
	name: "Tabs",
	components: { EditEntities, EditItems },
	props: {
		tabs: Array
	},
	setup(props) {
		return {
			activateTab(tab) {
				props.tabs.forEach((tab) => {
					tab.active = false;
				});

				tab.active = true;
			}
		}
	}
}
</script>

<style lang="scss">
.component-tabs {
	.tab-content {
		padding-top: 20px;
	}
}
</style>