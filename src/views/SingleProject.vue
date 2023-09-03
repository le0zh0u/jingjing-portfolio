<script>
import feather from 'feather-icons';
import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	components: {
		ProjectHeader, VuePdfApp
	},
	data: () => {
		return {
			projects,
			project: {
				id: 0,
				img: '',
				title: '',
				category: '',
				dataImgs: [],
				dataPdf: '',
			},
		}
	},
	created() {
		const id = this.$route.params.id
		// 在数据集合中查找对应的数据
		const pjt = this.projects.find(p => p.id == id)
		this.project = pjt
		console.log("------")
		console.log(this.project.dataPdf)
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
		<ProjectHeader :category="project.category" :title="project.title" />

		<div class="w-full mx-auto mt-5 sm:mt-10">
			<img v-for="(design, index) in project.dataImgs"
				:src="design"
				:key="index"
				alt="photo"
			/>
			<div v-if="project.dataPdf">
				<vue-pdf-app style="height: 100vh;" :pdf="project.dataPdf"></vue-pdf-app>
			</div>
		</div>

	</div>
</template>

<style scoped></style>
