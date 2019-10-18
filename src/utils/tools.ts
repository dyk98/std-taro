import Taro from "@tarojs/taro";


// 将px转换为rpx
export const changePxToRpx = (px: number): number => {
  const windowWidth = Taro.getSystemInfoSync().windowWidth;
  // 转换为rpx
  return px * (750 / windowWidth);
};


// 获取屏幕高度
export const getWindowsHeight = () : number => {
  const windowHeight = Taro.getSystemInfoSync().windowHeight;
  return changePxToRpx(windowHeight);
};


