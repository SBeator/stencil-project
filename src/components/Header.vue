<template>
  <header class="header">
    <h1>{{$t('header.title')}}</h1>
    <div class="profile">
      <Avatar icon="person" />
    </div>
  </header>
</template>

<style scoped lang="less">
.header h1 {
  color: #ffffff;
  font-size: 14px;
  font-weight: normal;
  float: left;
}

.profile {
  float: right;
}
</style>
