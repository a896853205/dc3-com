import React, { useEffect } from 'react';

import { Typography, Button, Tabs } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { showFormwork } from '../actions';
import FeaturesDefine from '../components/contains/features-define';
import FormworkDetail from '../components/contains/formwork-detail';

import 'src/page/style/style.css';

const { Title } = Typography;
const { TabPane } = Tabs;

export default ({ setUrlState }: { setUrlState: Function }) => {
  let refresh = useSelector(
    (state: Formwork.ReduxState) => state.formwork.refresh
  );
  let dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(refresh);

    if (refresh) {
      // TODO: HTTP请求formworks数据
      dispatch(showFormwork());
    }
  }, [refresh, dispatch]);

  const callback = () => {};
  return (
    <>
      <Title>
        <Button
          shape='circle'
          style={{ marginRight: '10px' }}
          onClick={() => setUrlState({ uuid: undefined })}
        >
          <LeftOutlined />
        </Button>
        产品名: ModbusTcp-Device
      </Title>
      <Tabs defaultActiveKey='1' onChange={callback}>
        <TabPane tab='产品信息' key='1'>
          <FormworkDetail />
        </TabPane>
        <TabPane tab='功能定义' key='2'>
          <FeaturesDefine />
        </TabPane>
      </Tabs>
    </>
  );
};
