import React, { useCallback } from 'react';

import { Button, Modal, Form, Input, Space, Table, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { useDispatch } from 'react-redux';
import Mock from 'mockjs';

import { addDevice } from '../actions';
import Column from 'antd/lib/table/Column';

const { Search } = Input;

export default ({ setUrlState }: { setUrlState: Function }) => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO:http向后台请求数据
    dispatch(addDevice());
    setFalse();
  }, [dispatch, setFalse]);

  const { data } = Mock.mock({
    'data|10': [
      {
        'index|+1': 1,
        'name|+1': [
          'ModbusTcp-group',
          'Mqtt-group',
          'OpcUa-group',
          'OpcDa-group',
        ],
        id: 'wth1qhDt1BG9kzBon8xi010200',
        createTime: '@date("yyyy-MM-dd HH:mm:ss")',
      },
    ],
  });
  return (
    <>
      <Button onClick={setTrue} type='primary' style={{ marginRight: 10 }}>
        创建分组
      </Button>
      <Modal
        title='创建分组'
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText='取消'
        okText='确定'
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          layout='horizontal'
        >
          <Form.Item label='分组名称' required>
            <Input placeholder='请输入分组名称' />
          </Form.Item>
          <Form.Item label='分组描述'>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
      <Search
      placeholder='请输入分组名称'
      style={{ width: 200 }}
    />
      <Table
        dataSource={data}
        size='small'
        rowClassName='dc3-table-row'
        onRow={record => {
          return {
            onClick: _event => {
              setUrlState({
                uuid: record.index,
              });
            },
          };
        }}
      >
        <Column title='#' dataIndex='index' key='index' />
        <Column title='分组名称' dataIndex='name' key='name' />
        <Column title='分组ID' dataIndex='id' key='id' />
        <Column title='创建日期' dataIndex='createTime' key='createTime' />
        <Column
          title='操作'
          dataIndex='operation'
          key='operation'
          render={() => (
            <Space size='middle'>
              <Typography.Link>
                <EditOutlined />
                编辑
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
