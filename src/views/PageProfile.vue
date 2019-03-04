<template>
    <div class="flex-grid">
        <UserProfileCard
        v-if="!edit"
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
        />

        <UserProfileCardEditor
        v-else
        :user="user"
        :userPostsCount="userPostsCount"
        :userThreadsCount="userThreadsCount"
        />

        <div class="col-7 push-top">

            <div class="profile-header">
                <span class="text-lead">
                    {{user.username}}'s recent activity
                </span>
                <a href="#">See only started threads?</a>
            </div>

            <hr>

            <PostList :posts="userPost"/>
        </div>
      </div>
</template>

<script>
import PostList from '@/components/PostList'
import {mapGetters} from 'vuex'
import {countObjectProperties} from '@/utils/index'
import UserProfileCard from '@/components/UserProfileCard'
import UserProfileCardEditor from '@/components/UserProfileCardEditor'

export default {
    components: {
        PostList,
        UserProfileCard,
        UserProfileCardEditor
    },


    props: {
        edit: {
            type: Boolean,
            default: false
        }
    },


    computed: {
        ...mapGetters({
            user: "authUser"
        }),

        userPostsCount() {
            return countObjectProperties(this.user.posts)
        },

        userThreadsCount() {
            return countObjectProperties(this.user.threads)
        },

        userPost() {
            if(this.user.posts) {
                return Object.values(this.$store.state.posts)
                .filter(post=> post.userId === this.user['.key'])
            }

            return []
        }
    }


}
</script>

<style>

</style>
