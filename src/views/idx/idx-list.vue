<template>
  <div class="list">
      <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.list{
    width: 100%;
    padding:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
}

</style>