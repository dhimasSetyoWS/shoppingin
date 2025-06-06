<script setup>
import {ref , provide , shallowRef} from "vue";
import Navbar from "./components/Shoppingin/Navbar.vue"
import WelcomeShoppingin from "./components/Shoppingin/WelcomeShoppingin.vue"
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

// Component rendering
let appComp = shallowRef(WelcomeShoppingin)
provide('appComp' , appComp)
</script>

<template>
	<Navbar/>
	<component :is="appComp"></component>
</template>

<style scoped></style>