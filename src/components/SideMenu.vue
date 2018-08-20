<template>
  <Menu :active-name="activePath" :open-names="openedMenus" width="auto" :theme="theme2" class="menu" @on-select="onSelectMenu">
    <MenuItem name="/">{{$t("navigation.homepage")}}</MenuItem>
    <MenuItem name="/callforcar">{{$t("navigation.callForCar")}}</MenuItem>
  </Menu>
</template>
<script>
export default {
  data() {
    return {
      theme2: 'light',
      lastOpenedMenus: []
    }
  },
  computed: {
    activePath() {
      return this.$router.currentRoute.path
    },

    openedMenus() {
      return [
        this.activePath.replace(/(.+)\/.*/, (match, $1) => {
          return $1
        })
      ]
    }
  },
  mounted() {
    this.lastOpenedMenus = [...this.openedMenus]
  },
  methods: {
    onSelectMenu(path) {
      this.navigateTo(path)
    },
    navigateTo(path) {
      this.$router.push(path)
    }
  }
}
</script>
<style lang="less">
@import '../theme/color.less';

.menu {
  height: 100%;
  font-size: 12px;
}

.ivu-menu-light.ivu-menu-vertical {
  .ivu-menu-item,
  .ivu-menu-submenu-title {
    border-left: 0px solid @primary-color;
    transition: all 0.2s linear;
  }
  .ivu-menu-item-active {
    &.ivu-menu-item,
    .ivu-menu-submenu-title {
      border-right-color: rgba(0, 0, 0, 0);
      border-left-width: 6px;
      padding-left: 18px;
      color: @primary-color;
    }
  }

  .ivu-menu-submenu .ivu-menu-item-active.ivu-menu-item {
    border-left-width: 0;
    padding-left: 24px;
  }
}
</style>
