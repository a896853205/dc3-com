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
          <Checkbox value="A">温湿度</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="B">水浸</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="C">空调</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="D">配电箱</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="E">门磁</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="F">烟雾检测</Checkbox>
        </Col>
      </Row>
    </Checkbox.Group>
  );
};
