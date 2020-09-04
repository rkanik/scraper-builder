<template>
	<perfect-scrollbar :style="{ height, width }">
		<slot></slot>
	</perfect-scrollbar>
</template>

<script>
export default {
	name: 'Scrollbar',
	props: {
		height: [String, Number],
		width: [String, Number]
	}
}
</script>