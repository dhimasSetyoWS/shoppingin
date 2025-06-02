<script setup>
import {ref , provide} from "vue";
import WelcomeShoppingin from './components/Shoppingin/WelcomeShoppingin.vue';
import ShopItem from './components/Shoppingin/ShopItem.vue';

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
	<WelcomeShoppingin />
	<ShopItem/>
</template>

<style scoped></style>