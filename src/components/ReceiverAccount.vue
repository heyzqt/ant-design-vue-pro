<template>
  <a-input-group compact>
    <a-select v-model="type" @change="handleSelectChange">
      <a-select-option value="alipay">
        支付宝账号
      </a-select-option>
      <a-select-option value="bank">
        银行账户
      </a-select-option>
    </a-select>
    <a-input
      v-model="number"
      style="width: 50%"
      default-value=""
      @change="handleInputChange"
    />
  </a-input-group>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  data() {
    const { type, number } = this.value || {};
    return {
      type: type || "alipay",
      number: number || ""
    };
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    }
  },
  methods: {
    handleSelectChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleInputChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    }
  }
};
</script>

<style></style>
