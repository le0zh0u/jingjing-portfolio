<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	components: {
		ProjectHeader
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
			},
		}
	},
	created() {
		const id = this.$route.params.id
		// 在数据集合中查找对应的数据
		const pjt = this.projects.find(p => p.id == id)
		projects.forEach(p => {
			console.log(p.id)	
			console.log(p.id === id)	
		});
		console.log(this.projects)
		console.log(pjt)
		this.project = pjt
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
		</div>

	</div>
</template>

<style scoped></style>
