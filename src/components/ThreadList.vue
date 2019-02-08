<template>

    <div class="thread-list">
        <h2 class="list-title">Threads</h2>
        <ThreadListItem
            v-for="thread in threads" :key="thread.id"
            :thread = thread
        />
    </div>

</template>

<script>
    import ThreadListItem from './ThreadListItem.vue'

    export default {
        name: 'ThreadList',


        components: {
            ThreadListItem
        },


        props: {
            threads: {
                required: true,
                type: Array
            }
        }
    }
</script>