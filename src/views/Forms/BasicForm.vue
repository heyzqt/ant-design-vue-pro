<template>
  <a-form :form="form" :layout="formLayout">
    <a-form-item
      label="Form Layout"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-radio-group
        default-value="horizontal"
        @change="handleFormLayoutChange"
      >
        <a-radio-button value="horizontal">
          Horizontal
        </a-radio-button>
        <a-radio-button value="vertical">
          Vertical
        </a-radio-button>
        <a-radio-button value="inline">
          Inline
        </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="Field A"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="[
          'fieldA',
          {
            initialValue: 'hello',
            rules: [
              {
                required: true,
                min: 5,
                help: '请输入至少5个字符'
              }
            ]
          }
        ]"
        placeholder="input placeholder"
      />
    </a-form-item>
    <a-form-item
      label="Field B"
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input v-decorator="['fieldB']" placeholder="input placeholder" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="handleSubmit">
        Submit
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formLayout: "horizontal",
      fieldA: "",
      fieldAStatus: "",
      fieldAHelp: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.form.setFieldsValue({
        fieldA: "request value"
      });
    }, 2000);
  },
  watch: {
    fieldA(val) {
      if (val.length < 5) {
        this.fieldAStatus = "error";
        this.fieldAHelp = "输入字数要超过5个字符";
      } else {
        this.fieldAStatus = "";
        this.fieldAHelp = "";
      }
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 10 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 4, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    handleSubmit() {
      this.form.validateFields((errors, values) => {
        if (!errors) {
          console.log(values);
        }
      });
    }
  }
};
</script>
