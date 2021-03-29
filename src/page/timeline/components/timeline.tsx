import React from 'react';

import { Image } from 'antd';

import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';

// import Content from './content';

export default () => {
  return (
    <>
      <Breadcrumb />
      <Image width={1000} src={require('../pic/dc3.png')} />
      <ol>
        <li>
          当驱动启动时，本平台就可以采集到所有已经启动的驱动的信息。点击产品，点击新建产品。通过给产品分配驱动，实现产品和驱动的连接。
        </li>
        <li>
          点击位号，通过给新建的位号分配产品，实现位号和驱动的连接。这个位号其实就代表一个数据类型，并没有实际的意义。
        </li>
        <li>
          点击驱动配置，就可以给第一步中新建的产品进行配置。例如我们在第一步中建立的产品对应的驱动是modbus驱动，那么在这一步我们就可以按照modbus驱动对应的属性名，配置属性值。
        </li>
        <li>
          点击设备，在新建设备的时候，通过给设备配置产品，实现产品和设备的连接。
        </li>
        <li>
          点击位号配置，因为对应的设备不同，所以需要填所属设备，因为位号对应的驱动不同，所以属性名的下拉菜单会根据驱动类型动态变化，内容就是属性值。比如我们选的设备是温湿度传感器，给它选的位号对应的驱动是modbus驱动。所以它的属性有三个分别是偏移量、从站编号和功能码。我们可以从这三个属性的属性值找到这个温度传感器的温度值。
        </li>
      </ol>
    </>
  );
};
