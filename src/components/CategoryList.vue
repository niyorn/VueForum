<template>
    <div>
    <CategoryListItem  
        v-for="category in categories" :key="category['.key']"
        :category="category"
    />
    </div>
</template>

<script>
    import CategoryListItem from './CategoryListItem.vue'

    export default {
        components: {
            CategoryListItem
        },


        props: {
            categories: {
                required: true,
                type: Array
            }
        }
    }
</script>