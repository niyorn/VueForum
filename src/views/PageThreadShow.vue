<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts"/>
        <PostEditor :threadId="id" @save="addPost"/>
    </div>
</template>

<script>
    import sourceData from '@/data.json'
    import PostList from '@/components/PostList'
    import PostEditor from '@/components/PostEditor'

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },

        components: {
            PostList,
            PostEditor
        },

        data() {
            return {
                thread: sourceData.threads[this.id],
                newPostText: ''
            }
        },

        computed: {
            posts() {
                const postIds = Object.values(this.thread.posts)
                const filter = Object.values(sourceData.posts)
                    .filter(post => postIds.includes(post['.key']))
                return filter
            }
        },

        methods: {
            addPost({post}) { 
                const postId= post['.key']

                this.$set(sourceData.posts, postId, post)
                this.$set(this.thread.posts, postId, postId)
                this.$set(sourceData.users[post.userId].posts, postId, postId)
            }
        }
    }
</script>