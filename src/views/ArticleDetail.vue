<script>
import feather from 'feather-icons';
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";
import ArticleHeader from '../components/articles/ArticleHeader.vue';
import articles from '../data/articles';

export default {
	name: 'ArticleDetail',
	components: {
		ArticleHeader, VuePdfApp
	},
	data: () => {
		return {
			articles,
			article: {
				id: 0,
				title: '',
				type: '',
				content: '',
				dataPdf: ""
			}
		}
	},
	created() {
		const id = this.$route.params.id
		// 在数据集合中查找对应的数据
		const ar = this.articles.find(a => a.id == id)
		this.article = ar
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
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ArticleHeader :title="article.title" />

		<div class="w-full mx-auto mt-5 sm:mt-10">
			<div v-if="article.type == 'pdf'">
				<vue-pdf-app style="height: 100vh;" :pdf="article.dataPdf"></vue-pdf-app>
			</div>
			<div v-else>
				{{ article.content }}
			</div>
		</div>

	</div>
</template>

<style scoped></style>
