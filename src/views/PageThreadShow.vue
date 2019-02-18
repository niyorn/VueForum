<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts" />
    </div>
</template>

<script>
    import sourceData from '@/data.json'
    import PostList from '@/components/PostList'

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },

        components: {
            PostList
        },

        data() {
            return {
                thread: sourceData.threads[this.id]
            }
        },

        computed: {
            posts() {
                const postIds = Object.values(this.thread.posts)
                const filter = Object.values(sourceData.posts)
                    .filter(post => postIds.includes(post['.key']))
                return filter
            }
        }
    }
</script>