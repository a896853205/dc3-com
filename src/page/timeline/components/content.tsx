import React from 'react';

import { Card, Image, Tag } from 'antd';

export default (props: any) => {
  const { title, description, pic } = props;
  return (
    <>
      <Card
        title={title}
        hoverable
        headStyle={{ fontSize: '16px', fontWeight: 'bold' }}
        extra={<Tag color='geekblue'>设备接入</Tag>}
      >
        <Card.Meta
          avatar={<Image width={350} src={pic} />}
          description={description}
          style={{ fontSize: '14px', color: '#8c8c8c' }}
        />
      </Card>
    </>
  );
};
