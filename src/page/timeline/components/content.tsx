import React, { useEffect } from 'react';

import { Card, Image } from 'antd';

export default (props: any) => {
  const { title, description } = props;
  return (
    <>
      <Card
        title={title}
        hoverable
        headStyle={{ fontSize: '16px', fontWeight: 'bold' }}
      >
        <Card.Meta
          avatar={
            <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          description={description}
        />
      </Card>
    </>
  );
};
