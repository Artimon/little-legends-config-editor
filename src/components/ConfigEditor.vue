<template>
	<div class="component-config-editor">
		<div class="container-fluid">
			<tabs :tabs="tabs"></tabs>

<!--			<ul class="nav nav-tabs">-->
<!--				<li class="nav-item">-->
<!--					<a class="nav-link active" href="#">-->
<!--						Entities-->
<!--					</a>-->
<!--				</li>-->
<!--				<li class="nav-item">-->
<!--					<a class="nav-link" href="#">-->
<!--						Items-->
<!--					</a>-->
<!--				</li>-->
<!--			</ul>-->
<!--			<div class="tab-content">-->
<!--				<div class="tab-pane fade active show">-->
<!--					<edit-entities></edit-entities>-->
<!--				</div>-->
<!--				<div class="tab-pane fade show">-->
<!--					<edit-items></edit-items>-->
<!--				</div>-->
<!--			</div>-->
		</div>
	</div>
</template>

<script>
import Tabs from "../components/Tabs.vue";

export default {
	name: "ConfigEditor",
	components: {
		Tabs
	},
	data() {
		return {
			tabs: [
				{
					title: "Entities",
					componentName: "EditEntities",
					active: true
				},
				{
					title: "Items",
					componentName: "EditItems"
				}
			]
		}
	}
}
</script>

<style scoped>

</style>