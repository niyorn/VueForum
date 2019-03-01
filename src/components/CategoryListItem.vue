<template>
        <div class="category-item push-top">
        <div class="forum-list">
            <h2 class="list-title">
                <router-link :to="{name: 'Category', params: {id: category['.key']}}">
                    {{category.name}}
                </router-link>
            </h2>
            <ForumList :forums="categoryForums"/>
        </div>
    </div>
</template>


<script>
import ForumList from './ForumList.vue'

export default {
    components: {
        ForumList
    },


    props: {
        category: {
            required: true,
            type: Object
        }
    },


    computed: {
        categoryForums() {
            return Object.values( this.$store.state.forums)
            .filter(forum => {
                return forum.categoryId === this.category['.key']
            })
        }
    }
}
</script>

