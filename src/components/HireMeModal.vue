<script>
import feather from 'feather-icons';
import Button from './reusable/Button.vue';
export default {
	props: ['showModal', 'modal', 'categories'],
	components: { Button },
	data() {
		return {};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<transition name="fade">
		<div v-show="modal" class="font-general-regular fixed inset-0 z-30">
			<!-- Modal body background as backdrop -->
			<div
				v-show="modal"
				@click="showModal()"
				class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
			></div>
			<!-- Modal content -->
			<main
				class="flex flex-col items-center justify-center h-full w-full"
			>
				<transition name="fade-up-down">
					<div
						v-show="modal"
						class="modal-wrapper flex items-center z-30"
					>
						<div
							class="modal max-w-md mx-5 md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
						>
							<div
								class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark"
							>
								<h5
									class="text-primary-dark dark:text-primary-light text-xl"
								>
									联系方式
								</h5>
								<button
									class="px-4 text-primary-dark dark:text-primary-light"
									@click="showModal()"
								>
									<i data-feather="x"></i>
								</button>
							</div>
							<div class="modal-body px-5 w-full h-full text-left">

								<label class="block mb-2 text-lg text-primary-dark dark:text-primary-light w-80">
									朱菁菁 - 用户体验设计师
								</label>

								<div class="max-w-xl my-4 flex flex-row">
									<div class="basis-1/4">邮箱</div>
									<div class="basis-3/4">531120183@qq.com</div>
								</div>
								<div class="max-w-xl my-4 flex flex-row">
									<div class="basis-1/4">QQ</div>
									<div class="basis-3/4">531120183</div>
								</div>
								<div class="max-w-xl my-4 flex flex-row">
									<div class="basis-1/4">电话</div>
									<div class="basis-3/4">15757115641</div>
								</div>
							</div>
							<div
								class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right"
							>
								<Button
									title="Close"
									class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
									@click="showModal()"
									aria-label="Close Modal"
								/>
							</div>
						</div>
					</div>
				</transition>
			</main>
		</div>
	</transition>
</template>

<style scoped>
.modal-body {
	max-height: 570px;
}
.bg-gray-800-opacity {
	background-color: #2d374850;
}
@media screen and (max-width: 768px) {
	.modal-body {
		max-height: 400px;
	}
}
.fade-up-down-enter-active {
	transition: all 0.3s ease;
}
.fade-up-down-leave-active {
	transition: all 0.3s ease;
}
.fade-up-down-enter {
	transform: translateY(10%);
	opacity: 0;
}
.fade-up-down-leave-to {
	transform: translateY(10%);
	opacity: 0;
}

.fade-enter-active {
	-webkit-transition: opacity 2s;
	transition: opacity 0.3s;
}
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
