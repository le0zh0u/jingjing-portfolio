<script>
import feather from 'feather-icons';
import myservices from '../../data/myservices';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
			myservices
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section class="pt-20 sm:pt-28">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				我的服务
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-base
					font-normal
					mb-4
				"
			>
			网站主要分享个人项目经历、沉淀的设计规范，以及积累的经验总结性文章
			</h3>
		</div>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 sm:gap-10"
		>
			<div v-for="myservice in myservices"
				:key="myservice.id"
				class="rounded-xl shadow-lg p-10 sm:p-4 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark cursor-default">
				<div>
					<img
						:src="myservice.img"
						:alt="myservice.title"
						class="rounded-t-xl border-none mx-auto h-40"
						width="280" height="190"
					/>
				</div>
				<div class="text-center px-4 py-6">
					<p
						class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
					>
						{{myservice.title}}
					</p>
					<span
						class="font-general-regular text-base text-ternary-dark dark:text-ternary-light"
						>{{myservice.content}}</span
					>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.resume-button {
	background-color: rgba(251, 153, 45, 1)
}
</style>
