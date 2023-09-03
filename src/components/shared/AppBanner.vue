<script>
import feather from 'feather-icons';

export default {
	name: 'Home',
	data: () => {
		return {
			theme: '',
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
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 app-banner"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/3 text-left">
			<h1
				class="font-general-serif text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
			>
				Hi! I am 
			</h1>
			<h1
				class="font-general-serif text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-amber-400 dark:text-amber-600 uppercase"
			>
				UX-JINGJING
			</h1>
			<p
				class="font-general-medium mt-2 text-base sm:text-lg  xl:text-xl text-center sm:text-left leading-none text-gray-400"
			>
				欢迎来到我的UX个人网站~
			</p>
			<p
				class="font-general-medium mt-2 text-base sm:text-lg  xl:text-xl text-center sm:text-left leading-none text-gray-400"
			>
			欢迎探讨，一起做生活的设计师
			</p>
			<div class="flex justify-center sm:block" >
				<a
					download="JingJing-Resume.pdf"
					href="/files/JingJing-Resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-orange-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-full focus:ring-1 bg-orange-400 hover:bg-orange-600 focus:ring-orange-900 text-white duration-500 uppercase"
					aria-label="Download Resume"
				>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Resume</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/3 text-right float-right">
			<img
				src="@/assets/images/banner-photo.png"
				alt="photo"
			/>
		</div>
	</section>
</template>

<style scoped>
.resume-button {
	background-color: rgba(251, 153, 45, 1)
}
</style>
