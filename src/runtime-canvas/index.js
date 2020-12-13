import { createRenderer } from "@vue/runtime-core";
import { Graphics, Text } from "pixi.js";
const render = createRenderer({
  createElement(type) {
    console.log(type);
    // 绘制一个矩形
    // pixijs
    let element;
    if (type === "rect") {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawRect(0, 0, 500, 500);
      element.endFill();
    } else if (type === "circle") {
      element = new Graphics();
      element.beginFill(0xff0000);
      element.drawCircle(0, 0, 50);
      element.endFill();
    }
    return element;
  },

  patchProp(el, key, prevValue, nextValue) {
    // pxix
    // el.x = value;
    // el.y = value;
    el[key] = nextValue;
  },

  createText(text) {
    return new Text(text);
  },

  setElementText(node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },

  insert(el, parent) {
    console.log(el);
    console.log(parent);
  },
});

// 模拟api 减少代码
export function createApp(rootComponent) {
  return render.createApp(rootComponent);
}
