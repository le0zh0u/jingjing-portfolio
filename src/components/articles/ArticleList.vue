<script>
import articles from '../../data/articles';

export default {
    data: () => {
		return {
			articles,
		};
	},
};
</script>

<template>
    <ul role="list" class="divide-y divide-gray-100">
        <li v-for="article in articles" :key="article.id" class="flex justify-between gap-x-6 py-5">
            <router-link
		:to="'/article/' + article.id"
		aria-label="Article Page"
	>
            <div class="flex gap-x-4">
                <div class="w-24 h-20 bg-amber-200">

                </div>
                <!-- <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl" alt="" /> -->
                <div class="min-w-0 flex-auto">
                <p
                    class="font-general-semibold text-base sm:text-xl font-sans mb-2 text-ternary-dark dark:text-ternary-light text-left"
                >
                {{ article.title }}
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500 text-left">{{ article.createYear }}</p>
                </div>
            </div>
        </router-link>
        </li>
  </ul>
</template>

<style scoped></style>
