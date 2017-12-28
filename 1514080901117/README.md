# TomatosTime
## 小程序二维码(发布版）
![](https://github.com/ShadowWarLock/web-wechat-2017/blob/master/1514080901117/images/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg)
## 小程序创意说明
暑假的时候当看书看久了之后会出现注意力下降，所以上网搜索了一些学习方法，接触到了番茄工作法，尝试之后觉得挺有效的，所以就想自己做一个番茄时钟。
## 小程序页面设计
整体页面设计以简洁为主，在首页中用了一个九宫格存放按钮，以及一个自定义任务的按钮，做了一个表单页还有实现主要功能的计时页。
其中主页和表单页的页面布局主要是从weui中复制过来的辅以自己的CSS进行布局调整。表单页主要是在JS中写了统计文本框字数同时实时显示，以及写了一个写缓存以及读缓存的函数。写缓存的函数与表单页的“开始新任务”按钮的点击事件绑定，读缓存在加载页面时读取，即保留上次输入的效果。
在计时页中，首页使用css构建了2个圆，重叠在一起，其中一个为白色，一个为蓝色，通过API：wx.createAnimation创建了一个动画，实现蓝色圆在25分钟内逐渐缩小至无，动态反应剩余时间。通过JS创建了一个25分钟计时器，在wxml中通过数据绑定进行显示。
## 小程序主要界面截图
![](https://github.com/ShadowWarLock/web-wechat-2017/blob/master/1514080901117/images/%E4%B8%BB%E9%A1%B5.PNG)
![](https://github.com/ShadowWarLock/web-wechat-2017/blob/master/1514080901117/images/%E8%AE%A1%E6%97%B6%E9%A1%B5.PNG)