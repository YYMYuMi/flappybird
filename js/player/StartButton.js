import { DataStore } from "../base/DataStore";
import {Sprite} from "../base/Sprite";

export class StartButton extends Sprite{
  constructor(){
    // 获取开始按钮图片
    let img = Sprite.getImage("startButton")
    let land = Sprite.getImage("land")
    // 获取画布
    let canvas = DataStore.getInstance().canvas;
    let w = canvas.width;
    let h = canvas.height;
    // 按钮显示区域
    let x = (w - img.width)/2;
    let y = (h - img.height - land.height)/2;
    // 重新父类构造
    super(img,0,0,img.width,img.height,x,y,img.width,img.height)

  }
}