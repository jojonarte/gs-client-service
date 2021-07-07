import { Empty, Spin, List, Card } from 'antd';
import React, { useEffect } from 'react';
import ColorAvatar from 'src/base/components/ColorAvatar';
import { Phone } from 'src/features/phones/phonesApi';
import { listPhonesAsync, phonesStateSelector } from 'src/features/phones/phoneSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const PhonesGallery: React.FC = () => {
  const phonesState = useAppSelector(phonesStateSelector);
  const dispatch = useAppDispatch();
  const getPhones = () => dispatch(listPhonesAsync());

  useEffect(() => {
    getPhones();
    // eslint-disable-next-line
  },[])

  if (!phonesState.phones.length) {
    return <Empty description="Phone List is Empty" />
  }
  if (phonesState.isFetching) {
    return <Spin size="large" />
  }

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 5,
        xxl: 5
      }}
      dataSource={phonesState.phones}
      renderItem={(item: Phone) => {
        return (
          <List.Item>
            <Card
              style={{ padding: 16}}
              hoverable
              cover={<img alt={item.name} src={item.imageFileName} />}>
              <Card.Meta
                avatar={<ColorAvatar color={item.color} />}
                title={item.name}
                description={item.description}
              />
            </Card>
          </List.Item>
        );
      }}
    />
   )
};

export default PhonesGallery;