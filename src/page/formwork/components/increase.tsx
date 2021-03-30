/**
 * 具体的产品新增页面
 */
import React, { useCallback, useState } from 'react';

import {
  Button,
  Select,
  Typography,
  Form,
  Input,
  Drawer,
  Space,
  Tooltip,
  Table,
} from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addFormwork } from '../actions';
import Column from 'antd/lib/table/Column';

const { Option } = Select;
const { Title, Text } = Typography;

export default () => {
  const [visible, setVisible] = useState(false);
  const [clickable, setClickable] = useState(false);
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
  const data = [
    {
      key: '1',
      type: '属性',
      name: '温度',
      id: 'CurrentTemperature',
      dataType: 'DOUBLE',
      tag: '可选',
    },
    {
      key: '2',
      type: '属性',
      name: '温度',
      id: 'CurrentHumidity',
      dataType: 'DOUBLE',
      tag: '必选',
    },
  ];
  const onFinish = useCallback(() => {
    // TODO: HTTP请求后台增加

    dispatch(addFormwork());
  }, [dispatch]);

  return (
    // TODO:面包屑显示有问题
    <>
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
        <Form.Item label='标准品类' required>
          <Space>
            <Form.Item name='modal-type' noStyle>
              <Select
                style={{ width: 200 }}
                onSelect={() => {
                  setClickable(true);
                }}
              >
                <Option value='铂电阻温度传感器'>铂电阻温度传感器</Option>
                <Option value='室内温度传感器'>室内温度传感器</Option>
              </Select>
            </Form.Item>
            {clickable ? (
              <Tooltip title='查看产品标准品类的功能'>
                <Typography.Link href='#API' onClick={showDrawer}>
                  查看功能
                </Typography.Link>
              </Tooltip>
            ) : (
              <Text disabled>查看功能</Text>
            )}
          </Space>
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
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            新建
          </Button>
          <Button htmlType='button'>取消</Button>
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
        <Table dataSource={data}>
          <Column title='功能类型' dataIndex='type' key='type' />
          <Column title='功能名称' dataIndex='name' key='name' />
          <Column title='标识符' dataIndex='id' key='id' />
          <Column title='数据类型' dataIndex='dataType' key='dataType' />
        </Table>
      </Drawer>
    </>
  );
};
