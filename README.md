# imgLoad
图片预加载插件---preload.js

$.preload(imgs, // 图片数组

{

  order: 'ordered',  //是否有序预加载  ordered/unordered
  
  each:callback, //每张图片加载完毕后执行
  
  all:callback // 所有图片加载完毕后执行

});
