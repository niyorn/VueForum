<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ForumList :forums="forums"/>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import ThreadList from '@/components/ThreadList'
  import ForumList from '@/components/ForumList'

  export default {
    components: {
      ThreadList,
      ForumList
    },


    data() {
      return {
        forums: Object.values(sourceData.forums),
        threads: Object.values(sourceData.threads),
        posts: sourceData.posts,
        users: sourceData.users,
      }
    },

    created() {
      console.table('sourceData', sourceData)
    }
  }
</script>
