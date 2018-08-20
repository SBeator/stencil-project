<template>
  <div class="title">
    <slot></slot>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
@import '../theme/index.less';
.title {
  margin:@title-margin;
  font-weight: @title-font-weight;
  font-size: @title-font-size;
}

</style>
