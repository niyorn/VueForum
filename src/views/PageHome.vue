<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
  import sourceData from '@/data.json'
  import ThreadList from '@/components/ThreadList'

  export default {
    components: {
      ThreadList
    },


    data() {
      return {
        threads: Object.values(sourceData.threads),
        posts: sourceData.posts,
        users: sourceData.users
      }
    }
  }
</script>
