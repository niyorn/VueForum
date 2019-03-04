<template>
    <form class="form-group" @submit.prevent="save">
        <textarea class="form-input" name="" cols="30" rows="10" v-model="text">
            </textarea>

        <div class="form-action">
            <button class="btn-blue">Submit post</button>
        </div>
    </form>
</template>

<script>
   

    export default {
        props: {
            threadId: {
                required: true,
            }
        },

        data() {
            return {                
                thread:  this.$store.state.threads[this.threadId],
                text: ''
            }
        },
        methods: {
            save() {
                const postId = "Placeholder-PostId" + Math.random(100)
                const post = {
                    text: this.text,
                    threadId: this.threadId,                }

                this.$emit('save', {
                    post
                })

                this.$store.dispatch('createPost', post)


                this.text = ''
            }
        }
    }
</script>