<template>
    <div class="post">
        <div class="user-info">
            <a href="#" class="user-name">{{user.name}}</a>

            <a href="#">
                <img class="avatar-large" :src="user.avatar" alt="">
            </a>

            <p class="desktop-only text-small">{{userPostsCount}} posts</p>
        </div>

        <div class="post-content">
            <div>
                <p>
                    {{post.text}}
                </p>
            </div>
        </div>

        <div class="post-date text-faded">
            <AppDate :timestamp="post.publishedAt" />
        </div>
    </div>
</template>


<script>
   import {countObjectProperties} from '@/utils/index'


    export default {
        props: {
            post: {
                required: true,
                type: Object
            }
        },


        computed: {
            user() {
                return  this.$store.state.users[this.post.userId]
            },

            userPostsCount() {
                return countObjectProperties(this.user.posts)
            }
        },


        filters: {
            humanFriendlyDate(date) {
                return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
            },

            diffForHuman(date) {
                return moment.unix(date).fromNow()
            }
        }
    }
</script>