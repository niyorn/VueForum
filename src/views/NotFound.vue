<template>
    <div class="col-full">
        <h1>Not Found</h1>
        <p>We couldn't find the page you're looking for. You wanna go <router-link :to="{name:'Home'}">Home</router-link> instead?</p>
    </div>
</template>

<style lang="scss" scoped>
    div {
        text-align: center;
    }

    h1 {
        font-size: 6em;
    }

    p {
        font-size: 4em;
        font-weight: lighter;
    }
</style>

