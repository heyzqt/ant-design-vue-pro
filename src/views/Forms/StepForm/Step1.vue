<template>
  <a-form layout="horizontal" :form="form">
    <a-form-item
      label="账户："
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="[
          'payAccount',
          {
            initialValue: step.payAccount,
            rules: [
              {
                required: true,
                message: '请输入付款账号'
              }
            ]
          }
        ]"
        placeholder="请输入付款账号"
      ></a-input>
    </a-form-item>
    <a-form-item
      label="收款账户："
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
    >
      <receiver-account
        v-decorator="[
          'receiverAccount',
          {
            initialValue: step.receiverAccount,
            rules: [
              {
                required: true,
                message: '请输入收款账号',
                validator: this.handleValidator
              }
            ]
          }
        ]"
        placeholder="请输入收款账号"
      ></receiver-account>
    </a-form-item>
    <a-form-item :wrapperCol="{ span: 4, offset: 4 }">
      <a-button type="primary" @click="handleNext">下一步</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import ReceiverAccount from "@/components/ReceiverAccount";
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
  components: {
    ReceiverAccount
  },
  methods: {
    handleNext() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          this.$store.commit({ type: "form/saveStepForm", payload: values });
          this.$router.push({ name: "confirm" });
        }
      });
    },
    handleValidator(rule, value, callback) {
      if (value && value.number) {
        callback();
      } else {
        callback(false);
      }
    }
  }
};
</script>

<style></style>
