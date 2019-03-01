<template>
  <div class="col-full">
    <h1>Welcome to the forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
 
  import CategoryList from '@/components/CategoryList'

  export default {
    components: {
      CategoryList
    },

    computed: {
      categories() {
        return Object.values( this.$store.state.categories)
      }
    },


    created() {
      console.table(' this.$store.state',  this.$store.state)
    }
  }
</script>
