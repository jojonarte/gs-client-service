import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageLoader from 'src/base/components/PageLoader';

const PhonesGallery = React.lazy(() => import('src/app/pages/PhonesGallery'));

const MainRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<PageLoader />}>
          <Route path="/" exact component={PhonesGallery} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  )
};

export default MainRouter;