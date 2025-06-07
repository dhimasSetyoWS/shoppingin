<template>
	<div class="main">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-2 fadeInUp">
			<div class="card w-full bg-base-100 card-lg shadow-sm text-start col-span-1 md:col-span-2 flex flex-col">
				<div class="card-body flex-grow">
					<h2 class="card-title">Name</h2>
					<small>Ubah nama anda?</small>
					<input type="text" value="Nama kamu" class="input mt-2" />
				</div>
				<div class="card-actions justify-end p-4">
					<button class="btn btn-green">Change</button>
				</div>
			</div>
			<div class="card w-full bg-base-100 card-lg shadow-sm text-start col-span-1 flex flex-col">
				<div class="card-body flex-grow">
					<h2 class="card-title">Profile Image</h2>
					<small>Ubah profile picture anda?</small>
					<div class="avatar indicator mt-2">
						<a href="#" type="button"
							class="indicator-item indicator-bottom badge bg-green-500 border-none">[0]</a>
						<div class="h-20 w-20 rounded-lg">
							<img alt="Tailwind CSS examples"
								src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
						</div>
					</div>
				</div>
				<div class="card-actions justify-end p-4">
					<button class="btn btn-green">Change</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
</script>

<style scoped></style>