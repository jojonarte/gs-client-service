import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const PhonesGallery = React.lazy(() => import('src/app/pages/PhonesGallery'));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Spin size="large" />}>
          <Route path="/" exact component={PhonesGallery} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
};

export default MainRouter;