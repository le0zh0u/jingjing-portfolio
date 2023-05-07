<script>
import ArticleList from '../components/articles/ArticleList.vue';

export default {
	name: 'Articles',
	components: {
		ArticleList,
	},
};
</script>

<template>
	<div class="container mx-auto">
		<section class="pt-10 sm:pt-14">
		<!-- Projects grid title -->
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				所有文章
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular
					text-center text-secondary-dark
					dark:text-ternary-light
					text-md
					sm:text-xl
					font-normal
					mb-4
				"
			>
			分享自我学习或工作经验所总结得出的有益文章
			</h3>
		</div>

		<!-- Projects grid -->
		<ArticleList />
	</section>
	</div>
</template>

<style scoped></style>
