<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div ul{
    display: flex;
    margin:10px 0px;
    border-bottom: 1px solid #ccc;
}
li{
    flex:1;
    text-align: center;
    font-size: 12px;
    padding-bottom: 20px;
}
</style>