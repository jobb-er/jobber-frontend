import { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Container, AuthContainer, Settings } from "./packages/app";
import { AllOffers, MyOffers, OfferDetails } from "./packages/offers";
import { Messages } from "./packages/chat";
import { Profile } from "./packages/profile";
import {
  OFFERS,
  MESSAGES,
  MY_OFFERS,
  PROFILE,
  SETTINGS,
} from "./common/constants";

const App = (): ReactElement => (
  <BrowserRouter>
    <AuthContainer>
      <Container>
        <Routes>
          <Route path={OFFERS} element={<AllOffers />} />
          <Route path={`${OFFERS}/:id`} element={<OfferDetails />} />
          <Route path={MESSAGES} element={<Messages />} />
          <Route path={MY_OFFERS} element={<MyOffers />} />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={SETTINGS} element={<Settings />} />
          <Route path="*" element={<Navigate to={OFFERS} replace />} />
        </Routes>
      </Container>
    </AuthContainer>
  </BrowserRouter>
);

export default App;
