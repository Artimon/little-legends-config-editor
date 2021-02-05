<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<hello-world msg="Hello Vue 3 + Vite" />
	<open-folder />
	<config-editor />
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import OpenFolder from "./components/OpenFolder.vue";
import ConfigEditor from "./components/ConfigEditor.vue";
</script>

<style lang="scss">
	@import "./sass/styles";
</style>