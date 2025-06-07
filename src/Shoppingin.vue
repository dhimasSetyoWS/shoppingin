<script setup>
import {ref , provide , shallowRef} from "vue";
import Navbar from "./components/Shoppingin/Navbar.vue"
import WelcomeShoppingin from "./components/Shoppingin/WelcomeShoppingin.vue"
// untuk label totalBuy di navbar
const total = ref(0);
provide('totalBuy' , total) // provide agar semua child bisa menggunakan total

function addItem() {
	total.value++
	let shoppingCart = document.querySelector('.indicator-item');
	shoppingCart.classList.add('added');
	setTimeout(()=> {
		shoppingCart.classList.toggle('added');
	}, 800)
}
provide('addItem' , addItem) // provide agar semua child bisa menggunakan addItem
// end of totalBuy

// Component rendering
let appComp = shallowRef(WelcomeShoppingin) // pakai shallowRef karena default refnya adalah sebuah component yang mana itu adalah tipe data yang kompleks
provide('appComp' , appComp) // provide agar semua child bisa menggunakan appComp
</script>

<template>
	<Navbar/>
	<component :is="appComp"></component>
</template>

<style scoped></style>