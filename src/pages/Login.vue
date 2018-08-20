<template>
  <div class="main">
    <Row class="login-title">
      登 录 账 户
    </Row>
    <Row>
      <Form inline label-position="top">
        <Row class="username-row">
          <div class="username-div">
            用户名
          </div>
        </Row>
        <Row style="margin-top: 10px">
          <Input v-model="username" id="username" placeholder="输入您的用户名" type="text" class="input-width" />
        </Row>
        <Row class="input-margin">
          <div class="username-div">
            密码
          </div>
        </Row>
        <Row class="input-margin">
          <Input v-model="password" id="password" placeholder="输入您的密码信息" type="password" class="input-width" />
        </Row>
        <Row class="button-margin">
          <Button type="primary" @click="onSubmit" class="input-width">登 录</Button>
          <p>{{message}}</p>
        </Row>
      </Form>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      message: ''
    }
  },
  methods: {
    async onSubmit() {
      this.message = ''
      const response = await this.$store.dispatch('login/login', {
        username: this.username,
        password: this.password
      })

      if (response.success) {
        this.$router.push('/')
      } else {
        console.log('failed')
        this.message = response.msg
      }
    }
  }
}
</script>
<style lang="less" scoped>
form {
  font-size: 12px;
}
.main{
  text-align: center; /*让div内部文字居中*/
  background-color: #fff;
  box-shadow:0px 8px 12px 0px rgba(0,58,140,0.2);
  border-radius: 6px;
  width: 332px;
  height: 370px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.login-title{
  width:100%;
  height:60px;
  background:rgba(236,238,240,1);
  border-radius: 6px;
  text-align: center;
  font-size:22px;
  color:rgba(74,74,74,1);
  line-height:23px;
  padding: 16px 110px;
}
.username-row{
  margin-top: 40px;
}
.username-div{
  font-weight: bold;
  font-size:14px;
  line-height:20px;
  margin-left: 30px;
  text-align: left
}
.input-margin{
  margin-top: 10px;
}
.input-width{
  width: 80%;
}
.button-margin{
  margin-top: 30px
}
</style>
