import { DataStore } from "../base/DataStore.js";
// 地板图

import { Sprite } from "../base/Sprite.js";

export class Land extends Sprite{
  constructor(){
    // 获取地板图片对象
    let img =Sprite.getImage("land");
    let canvas = DataStore.getInstance().canvas;
    let w = canvas.width;
    let h = canvas.height;
    let y = h - img.height; //在画布上的起点坐标
    // 重新父类构造
    super(img,0,0,img.width,img.height,0,y,img.width,img.height)
  }
    // 重写父类的draw方法，实现地板的移动效果
    draw(){
      // 使地板在画布上的x坐标向左偏移2个像素
      this.x = this.x-2;
      // 重置this.x的值 防止地板断层
      if(this.x<DataStore.getInstance().canvas.width - this.srcW){
        this.x = 0;
      }
      // 重写draw方法
      super.draw()
    }
    
}