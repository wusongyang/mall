<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="isActive"><slot name="tabbar-icon-active"></slot></div>
        <div v-else><slot name="tabbar-icon"></slot></div>
        <div :style="activeStyle"><slot name="tabbar-text"></slot></div>
    </div>


</template>

<script>
    export default {
        name: "TabbarItem",
        props:{
            path: String,s
            color:{
                type: String,
                default: 'red',
            }
        },
        data(){
            return {
                sad:aa,
                adsa:ada,
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path);
            }
        },
        computed:{
            isActive(){
                return this.$route.path==this.path;
            },
            activeStyle(){
                return this.isActive ? {color: this.color} :{}
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item{
        font-size: 12px;
        height: 49px;
        flex: 1;
    }
    .tab-bar-item img{
        margin-top:3px ;

        height: 22px;
        vertical-align:bottom;
    }
    .active{
        color: red;
    }
</style>