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
    import sourceData from '@/data.json'

    export default {
        props: {
            threadId: {
                required: true,
            }
        },

        data() {
            return {                
                thread: sourceData.threads[this.threadId],
                text: ''
            }
        },
        methods: {
            save() {
                const postId = "Placeholder-PostId" + Math.random(100)
                const post = {
                    text: this.text,
                    publishedAt: Math.floor(Date.now() / 1000),
                    threadId: this.threadId,
                    userId: "L664y3qZSubDbT1R6npC0EEybJ73",
                    '.key': postId
                }

                this.$emit('save', {
                    post
                })

                this.text = ''
            }
        }
    }
</script>