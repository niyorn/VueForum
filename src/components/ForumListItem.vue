<template>
    <div class="forum-listing">
        <div class="forum-details">
            <router-link :to="{name:'Forum', params: {id:forum['.key']}}" class="forum-name">
                {{forum.name}}
            </router-link>

            <p class="forum-description ">{{forum.description}}</p>
        </div>


        <div class="threads-count">
            <p class="count text-lead">{{threadCount}}</p> {{threadCount === 1 ? "thread" : "threads"}}
        </div>

        <!-- TODO: Implement later -->
        <!-- <div class="last-thread">
                <img class="avatar" src="http://cleaneatsfastfeets.com/wp-content/uploads/2013/05/Mr-Burns.gif" alt="">
                <div class="last-thread-details">
                    <a href="#">How I grill my fish</a>
                    <p class="text-xsmall">By <a href="profile.html">Charles Montgomery Burns</a>, 2 days ago</p>
                </div>
            </div> -->
    </div>
</template>


<script>
    export default {
        props: {
            forum: {
                required: true,
                type: Object
            }
        },


        computed: {
            threadCount() {
                return this.forum.threads ? Object.values(this.forum.threads).length : 0
            }
        }
    }
</script>