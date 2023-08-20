<template>
	<div class="bg-alt rounded-lg p-2">
		<div class="rounded-lg overflow-hidden">
			<desktop
				title="theme title"
				:colors="['#323437', '#e2b714', '#e2b714', '#646669', '#2c2e31', '#d1d0c5', '#ca4754', '#7e2a33', '#ca4754', '#7e2a33']"
				background="https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg"
			/>
		</div>
	</div>
</template>

<script setup>
import desktop from '@/previews/desktop.vue';
</script>
