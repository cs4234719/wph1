<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.tabbar{
    display: flex;
    position: fixed;
    bottom:0;
    left:0;
    right:0;
    background: #fafafa;
    box-shadow: 0px 0px 5px #bbb;
    padding:5px 0;
}
</style>