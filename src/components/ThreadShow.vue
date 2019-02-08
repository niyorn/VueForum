<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>
        <div class="post-list">
            <div v-for="postId in thread.posts" :key="postId.id" class="post">
                <div class="user-info">
                    <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>

                    <a href="#">
                        <img class="avatar-large" src="http://i.imgur.com/s0AzOkO.png" alt="">
                    </a>

                    <p class="desktop-only text-small">107 posts</p>
                </div>

                <div class="post-content">
                    <div>
                        <p>
                            Is horseradish and Wasabi the same thing? I've heard so many different things.<br><br>
                            I want to know once and for all.
                        </p>
                    </div>
                </div>

                <div class="post-date text-faded">
                    6 hours ago
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import sourceData from '@/data.json'

    export default {
        props: {
            id: {
                required: true,
                type: String
            }
        },


        data() {
            return {
                thread: sourceData.threads[this.id],
                posts: sourceData.posts,
                users: sourceData.users
            }
        }
    }
</script>