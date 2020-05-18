<template>
    <div id="tab-bar">

    <slot></slot>



    </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
    #tab-bar{
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom:0;
        background-color: #D2E0E6;
        text-align: center;
        box-shadow: 0px -1px 1px rgba(100,100,100,0.1);
    }


</style>