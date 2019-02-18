<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>
        <PostList :posts="posts" />
        <form class="form-group" @submit.prevent="addPost">
            <textarea 
                class="form-input" 
                name="" cols="30" 
                rows="10"
                v-model="newPostText"
            >
            </textarea>

            <div class="form-action">
            <button class="btn-blue">Submit post</button>
        </div>
        </form>
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
            addPost() {
                const postId = "Placeholder-PostId" + Math.random(100)
                const post= {
                    text: this.newPostText,
                    publishedAt: Math.floor(Date.now()/1000),
                    threadId: this.id,
                    userId: "L664y3qZSubDbT1R6npC0EEybJ73",
                    '.key': postId
                }

                this.$set(sourceData.posts,postId,post)
                this.$set(this.thread.posts,postId,postId)
                this.$set(sourceData.users[post.userId].posts, postId, postId)

                this.newPostText= ''
            }
        }
    }
</script>