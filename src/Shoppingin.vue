<script setup>
import {ref , provide} from "vue";
import Navbar from "./components/Shoppingin/Navbar.vue"
// untuk label totalBuy di navbar
const total = ref(0);
provide('totalBuy' , total)

function addItem() {
	total.value++
	let shoppingCart = document.querySelector('.indicator-item');
	shoppingCart.classList.add('added');
	setTimeout(()=> {
		shoppingCart.classList.toggle('added');
	}, 800)
}
provide('addItem' , addItem)
// end of totalBuy
</script>

<template>
	<Navbar/>
	<RouterView/>
</template>

<style scoped></style>