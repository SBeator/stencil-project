<template>
  <div class="container">
    <div class="layout">
      <Layout>
        <Header>
          <slot name="header"></slot>
        </Header>
        <Layout class="main">
          <Sider hide-trigger >
            <slot name="navigate"></slot>
          </Sider>
          <Content class="ivu-article">
            <slot></slot>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>
<style lang="less" scoped>
.main {
  min-height: 100vh;
}
</style>
