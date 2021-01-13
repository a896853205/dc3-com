import React, { useRef, useEffect } from 'react';

import TMap from 'TMap';

export default () => {
  let mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //定义地图中心点坐标
    var center = new TMap.LatLng(40.040523, 116.273654);
    //定义map变量，调用TMap.Map构造函数创建地图
    var map = new TMap.Map(mapRef.current, {
      center: center, //设置地图中心点坐标
      zoom: 17, //设置地图缩放级别
      mapStyleId: 'style1', //个性化地图样式设置
    });
    //初始化散点图层并添加至map
    var dot = new TMap.visualization.Dot({
      //自定义散点样式（可选）
      styles: {
        circle: {
          type: 'circle',
          fillColor: '#FF0000',
        },
      },
    }).addTo(map); //将图层添加到map中
    //为dot图层添加数据
    dot.setData([
      { lat: 40.040934, lng: 116.272677, styleId: 'circle' },
      { lat: 40.04035, lng: 116.272666, styleId: 'circle' },
      //其它点省略...
    ]);
  }, []);

  return (
    <>
      <div ref={mapRef}></div>
    </>
  );
};
