<template>
    <div class="list-item">
        <div>
            <slot name="img"></slot>
        </div>
        <div>
            <slot name='name'></slot>
        </div>
        <div><slot name='price'></slot><slot name="pl"></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .list-item img{
        width: 100px;
        height: 100px;
        display: block;
        margin:0 auto;
    }
    .list-item{
        color:#999;
        font-size: 14px;
        width: 150px;
        border:1px solid #bbb;
        margin-bottom:20px;
    }
</style>