import React, { useCallback, useState } from 'react';

import {
  Button,
  Select,
  Typography,
  Form,
  Input,
  DatePicker,
  Drawer,
  Space,
  Tooltip,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addFormwork } from '../actions';
import Breadcrumb from 'src/components/Breadcrumb/Breadcrumb';
import Features from './contains/features';

const { Option } = Select;
const { Title } = Typography;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addFormwork());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    // TODO:面包屑显示有问题
    <>
      <Breadcrumb />
      <Title>
        <Button
          shape='circle'
          style={{ marginRight: '10px' }}
          onClick={() => {
            history.push('/home/formwork');
          }}
        >
          <LeftOutlined />
        </Button>
        新建产品
      </Title>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        layout='horizontal'
        onFinish={onFinish}
      >
        <Form.Item label='产品名称' required>
          <Input placeholder='请输入产品名称' />
        </Form.Item>
        <Form.Item label='标准品类'>
          <Space>
            <Form.Item name='modal-type' noStyle>
              <Select style={{ width: 200 }}>
                <Option value='铂电阻温度传感器'>铂电阻温度传感器</Option>
                <Option value='室内温度传感器'>室内温度传感器</Option>
              </Select>
            </Form.Item>
            <Tooltip title='查看产品标准品类的功能'>
              <Typography.Link href='#API' onClick={showDrawer}>
                查看功能
              </Typography.Link>
            </Tooltip>
          </Space>
        </Form.Item>
        <Form.Item label='公/私有' required>
          <Select>
            <Option value='公有'>公有</Option>
            <Option value='私有'>私有</Option>
          </Select>
        </Form.Item>
        <Form.Item label='所属驱动' required>
          <Select>
            <Option value='Mqtt'>Mqtt</Option>
            <Option value='Opc Ua'>Opc Ua</Option>
            <Option value='Opc Da'>Opc Da</Option>
            <Option value='Modbus Tcp'>Modbus Tcp</Option>
          </Select>
        </Form.Item>
        <Form.Item label='备注'>
          <Input.TextArea />
        </Form.Item>
        <Form.Item label='修改日期' required>
          <DatePicker />
        </Form.Item>
        <Form.Item label='创建日期' required>
          <DatePicker />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
          <Button htmlType='button'>Reset</Button>
          <Button type='link' htmlType='button'>
            Fill form
          </Button>
        </Form.Item>
      </Form>
      <Drawer
        title='标准定义功能'
        placement='right'
        closable={false}
        onClose={onClose}
        visible={visible}
        width='750px'
      >
        <Features />
      </Drawer>
    </>
  );
};
