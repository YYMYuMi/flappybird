import { DataStore } from "../base/DataStore"
// 水管的基类,封装了上下水管的公共部分

import { Sprite } from "../base/Sprite"

export class Pipe extends Sprite{
  constructor(img,top){//img是水管的图片,top水管出现时的高度
    // 无论上水管还是下水管，初始位置都是在屏幕的右侧外面
    // 所以x的初始坐标是屏幕的宽,y坐标不定
      let x = DataStore.getInstance().canvas.width;
      super(img,0,0,img.width,img.height,x,0,img.width,img.height)
      this.top = top;

  }

  // 重写draw方法,实现水管向左移动
  draw(){
    this.x = this.x-2
    super.draw()
  }
}