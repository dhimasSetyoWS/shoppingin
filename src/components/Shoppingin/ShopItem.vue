<script setup>
</script>
<template>
	<section id="items" class="p-12">
		<div id="highlightItem" class="min-w-full">
			<div class="card lg:card-side bg-base-100 shadow-none md:shadow-md shadow-green-300">
				<figure>
					<img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp" alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title text-6xl">Best Seller !</h2>
					<p class="text-4xl">Video Tape.</p>
					<div class="card-actions justify-end">
						<button class="btn btn-green">Buy</button>
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12">
			<div v-for="i in 5" :key="i" class="card bg-base-100 shadow-sm">
				<figure>
					<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">Card Title</h2>
					<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
					<div class="card-actions justify-end">
						<button class="btn btn-green">Buy Now</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>


<style scoped></style>