<template>
    <div class="col-full" :class="$style.centered">
        <h1 :class="$style.title">Not Found</h1>
        <p :class="$style.text">We couldn't find the page you're looking for. You wanna go <router-link :to="{name:'Home'}">Home</router-link> instead?</p>
    </div>
</template>

<style lang="scss" module>
    .centered {
        text-align: center;
    }

    .title {
        font-size: 6em;
    }

    .text {
        font-size: 4em;
        font-weight: lighter;
    }
</style>

