<template>
  <div class="greetings">
    <h3>
      欢迎来到您的专属AI工具箱
    </h3>
    {{ test }}
    {{id}}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      test: "Hello, world!",
    };
  },
  mounted() {
    console.log("Component mounted.");
  },
}
</script>
