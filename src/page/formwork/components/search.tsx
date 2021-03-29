import React, { useCallback } from 'react';

import { Form, Input, Button, Select, Table, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Mock from 'mockjs';

import { searchFormwork } from '../actions';
import Column from 'antd/lib/table/Column';

const { Option } = Select;

export default ({ setUrlState }: { setUrlState: Function }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data } = Mock.mock({
    'data|100': [
      {
        'index|+1': 1,
        'name|+1': [
          'ModbusTcpProfile',
          'MqttProfile',
          'OpcUaProfile',
          'OpcDaProfile',
        ],
        'isPrivate|1': ['私有', '公有'],
        'drive|+1': [
          'ModbusDriver',
          'MqttDriver',
          'OpcDaDriver',
          'OpcUaDriver',
        ],
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });
  const onFinish = useCallback(
    value => {
      dispatch(searchFormwork({ searchParam: value }));
    },
    [dispatch]
  );

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 10 }}
        layout='horizontal'
        onFinish={onFinish}
      >
        <Form.Item label='产品' name='name'>
          <Input placeholder='产品' />
        </Form.Item>
        <Form.Item label='公/私有' name='isPrivate'>
          <Select>
            <Option value={0}>公有</Option>
            <Option value={1}>私有</Option>
          </Select>
        </Form.Item>
        <Form.Item label='所属驱动' name='drive'>
          <Select>
            <Option value='Mqtt'>Mqtt</Option>
            <Option value='Opc Ua'>Opc Ua</Option>
            <Option value='Opc Da'>Opc Da</Option>
            <Option value='Modbus Tcp'>Modbus Tcp</Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Button
        onClick={() => {
          history.push('/home/formwork/addFormwork');
        }}
        type='primary'
      >
        新增产品
      </Button>
      <Table dataSource={data} size='small' rowClassName='dc3-table-row' onRow={record => {
          return {
            onClick: _event => {
              setUrlState({
                uuid: record.index,
              });
            },
          };
        }}>
        <Column title='#' dataIndex='index' key='index' />
        <Column title='产品' dataIndex='name' key='name' />
        <Column title='公/私有' dataIndex='isPrivate' key='isPrivate' />
        <Column title='所属驱动' dataIndex='drive' key='drive' />
        <Column title='创建日期' dataIndex='createTime' key='createTime' />
        <Column
          title='操作'
          dataIndex=''
          key=''
          render={() => (
            <Space size='middle'>
              <Typography.Link>
                <EditOutlined />
                查看
              </Typography.Link>
              <Typography.Link>
                <DeleteOutlined />
                删除
              </Typography.Link>
            </Space>
          )}
        />
      </Table>
    </>
  );
};
