<script>
export default {
	props: ['showModal', 'isOpen'],
};
</script>

<template>
	<!-- Header links -->
	<div
		:class="isOpen ? 'block' : 'hidden'"
		class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
	>

		<router-link
			to="/"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-amber-400 dark:hover:text-amber-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Home"
			>首页</router-link
		>
		
		<router-link
			to="/projects"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-amber-400 dark:hover:text-amber-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Projects"
			>项目</router-link
		>
		<!-- <router-link
			to="/about"
			class="font-general-small block text-left text-sm font-small text-primary-dark dark:text-ternary-light hover:text-amber-400 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="About Me"
			>关于</router-link
		> -->

		<router-link
			to="/articles"
			class="font-general-medium block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-amber-400 dark:hover:text-amber-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Articles"
			>文章</router-link
		>

		<!-- <router-link
			to="/contact"
			class="font-general-small block text-left text-sm font-small text-primary-dark dark:text-ternary-light hover:text-amber-400 dark:hover:text-indigo-300  sm:mx-4 mb-2 sm:py-2 "
			aria-label="Contact"
			>联系我</router-link
		> -->
		<div
			class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
		>
			<button
				class="font-general-medium sm:hidden block text-left text-md font-medium bg-amber-500 hover:bg-amber-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-500"
				@click="showModal()"
				aria-label="联系我"
			>
				联系我
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
