/**
 * search部分改成CheckBox，选项内容为6个模块
 */

import React from 'react';

import { Checkbox, Row, Col } from 'antd';

export default () => {
  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  return (
    <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
      <Row>
        <Col span={8}>
          <Checkbox value="index">首页展示</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="device-insert">设备接入</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="device-manager">设备数据管理</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="status">状态监控</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="warnning">告警管理</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
};
