import { defineComponent, h } from "@vue/runtime-core";

export default defineComponent({
  render() {
    return h("circle", { x: 150, y: 250 });
  },
});
