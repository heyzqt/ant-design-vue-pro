<template>
  <a-form layout="horizontal" :form="form">
    <a-form-item
      label="账户："
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
    >
      {{ step.payAccount }}
    </a-form-item>
    <a-form-item
      label="账户密码："
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
    >
      <a-input
        type="password"
        v-decorator="[
          'password',
          {
            initialValue: step.password,
            rules: [
              {
                required: true,
                message: '请输入付款密码'
              }
            ]
          }
        ]"
        placeholder="请输入付款密码"
      ></a-input>
    </a-form-item>
    <a-form-item :wrapperCol="{ span: 10, offset: 4 }">
      <a-button @click="handlePrev">上一步</a-button>
      <a-button style="margin-left:40px" type="primary" @click="handleSubmit"
        >提交</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handlePrev() {
      this.$router.go(-1);
    },
    handleSubmit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          this.$store.dispatch({
            type: "form/submitStepForm",
            payload: values
          });
        }
      });
    }
  }
};
</script>

<style></style>
