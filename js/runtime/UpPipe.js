import { Sprite } from "../base/Sprite";

import { Pipe } from "./Pipe";

export class UpPipe extends Pipe{
  constructor(top){
    // 获取上水管图片对象
    let img = Sprite.getImage("upPie")
    // 重写父类构造
    super(img,top)
  }

  draw(){
    this.y = this.top - this.h  //实际上水管出现使得初始y坐标
    super.draw()
  }
}