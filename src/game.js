import { Application } from "pixi.js";

// 需要根组件
// 需要根容器
// 借助canvas 绘制根节点 -pixi.js

// setup canvas
const game = new Application({
  width: 750,
  height: 1080,
});

console.log("Game =>", game);
document.body.append(game.view);

export function getRootContainer() {
  return game.stage;
}
