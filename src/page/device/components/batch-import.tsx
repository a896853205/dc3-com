import React, { useCallback } from "react";

import { Button, Modal, Upload } from "antd";
import { useBoolean } from "ahooks";
import { useDispatch } from "react-redux";
import { InboxOutlined } from "@ant-design/icons";

import { batchImportDevice } from "../actions";

const { Dragger } = Upload;

export default () => {
  const [isShow, { setTrue, setFalse }] = useBoolean(false);
  const dispatch = useDispatch();

  const onFinish = useCallback(() => {
    // TODO:向后台批量添加数据
    dispatch(batchImportDevice());
    setFalse();
  }, [dispatch, setFalse]);

  return (
    <>
      <Button onClick={setTrue} type="primary">
        批量导入
      </Button>
      <Modal
        title="批量导入"
        visible={isShow}
        onOk={onFinish}
        onCancel={setFalse}
        cancelText="取消"
        okText="确定"
      >
        <Dragger multiple>
          <p>
            <InboxOutlined />
          </p>
          <p>将文件拖拽到此处，或点击上传</p>
          <p>
            只能上传json格式文件，批量导入过程比较耗时，需要耐心等待，请勿切换其他页面！
          </p>
        </Dragger>
      </Modal>
    </>
  );
};
