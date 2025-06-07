<template>
	<div class="p-32">
		<div class="cart fadeIn bg-base-200">
			<h2 class="text-5xl">Barang Belanjaan Anda : </h2>
			<div v-if="totalItem > 0" class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
				<div v-for="i in totalItem" :key="i" class="card bg-base-100 shadow-sm">
					<figure>
						<img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
					</figure>
					<div class="card-body">
						<a href="" class="card-title underline">
							<h2>Card Title</h2>
						</a>
						<p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
						<div class="card-actions justify-end">
							<button @click="removeItem" class="btn bg-red-600">Remove</button>
						</div>
					</div>
				</div>
			</div>
			<div v-else class="mt-24">
				<p class="font-bold"> - Belum ada barang yang di beli</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import {inject} from "vue";
let totalItem = inject('totalBuy')

function removeItem() {
	totalItem.value--
}
</script>

<style>

</style>