import React from 'react';

import { Button, Modal, Upload, message } from 'antd';
import { useBoolean } from 'ahooks';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <>
      <Button onClick={setTrue} type="primary">
        批量导入
      </Button>
      <Modal
        title="批量导入"
        visible={isShow}
        onOk={setFalse}
        onCancel={setFalse}
        cancelText="取消"
        okText="确定"
      >
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">将文件拖拽到此处，或点击上传</p>
          <p className="ant-upload-hint">
            只能上传json格式文件，批量导入过程比较耗时，需要耐心等待，请勿切换其他页面！
          </p>
        </Dragger>
      </Modal>
    </>
  );
};
