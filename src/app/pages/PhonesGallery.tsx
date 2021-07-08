import { List, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import ColorAvatar from 'src/base/components/ColorAvatar';
import GalleryDetailModal from 'src/base/components/GalleryDetailModal';
import { Phone } from 'src/features/phones/phonesApi';
import { listPhonesAsync, phonesStateSelector } from 'src/features/phones/phoneSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const PhonesGallery: React.FC = () => {
  const [isPhoneDetailVisible, setPhoneDetailVisible] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState<Phone>();
  const phonesState = useAppSelector(phonesStateSelector);
  const dispatch = useAppDispatch();
  const getPhones = () => dispatch(listPhonesAsync());

  const togglePhoneDetail = (phone?: Phone) => {
    setPhoneDetailVisible(!isPhoneDetailVisible);
    setSelectedPhone(phone);
  }

  useEffect(() => {
    getPhones();
    // eslint-disable-next-line
  },[]);

  return (
    <>
      <GalleryDetailModal
        onCancel={() => {
          togglePhoneDetail()
        }}
        title={selectedPhone?.name}
        galleryItem={selectedPhone}
        visible={isPhoneDetailVisible}
      />
      <List
        locale={{ emptyText: "Phone List is Empty" }}
        loading={phonesState.isFetching}
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
        renderItem={(phone: Phone) => {
          return (
            <List.Item onClick={() => togglePhoneDetail(phone)}>
              <Card
                style={{ padding: 16}}
                hoverable
                cover={<img alt={phone.name} src={phone.imageFileName} />}>
                <Card.Meta
                  avatar={<ColorAvatar color={phone.color} />}
                  title={phone.name}
                  description={phone.description}
                />
              </Card>
            </List.Item>
          );
        }}
      />
    </>
   )
};

export default PhonesGallery;