import { defineComponent, h } from "@vue/runtime-core";
import Circle from "./components/Circle";
export default defineComponent({
  render() {
    // 创建虚拟节点
    // const vnode = h("div");
    const vnode = h("rect", { x: 100, y: 100 }, "我的头发是真的", h(Circle));
    console.log(vnode);
    return vnode;
  },
});
