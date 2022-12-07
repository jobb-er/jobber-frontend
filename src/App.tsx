import { ReactElement } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { Container, AuthContainer, Settings } from "./packages/app";
import { AllOffers, MyOffers, OfferDetails, NewOffer, EditOffer } from "./packages/offers";
import { Messages } from "./packages/chat";
import { Profile } from "./packages/profile";
import {
  OFFERS,
  MESSAGES,
  MY_OFFERS,
  PROFILE,
  SETTINGS,
  RECRUITER,
} from "./common/constants";
import { AppProps, AppMapState } from "./types";

const App = ({ auth }: AppProps): ReactElement => (
  <BrowserRouter>
    <AuthContainer>
      <Container>
        <Routes>
          <Route path={OFFERS} element={<AllOffers />} />
          <Route path={`${OFFERS}/:id`} element={<OfferDetails />} />
          <Route path={MESSAGES} element={<Messages />} />
          <Route path={MY_OFFERS} element={<MyOffers />} />
          <Route
            path={`${MY_OFFERS}/new`}
            element={
              auth?.isAuthorised && auth?.accountType === RECRUITER ? (
                <NewOffer />
              ) : (
                <Navigate to={MY_OFFERS} replace />
              )
            }
          />
          <Route
            path={`${MY_OFFERS}/edit/:id`}
            element={
              auth?.isAuthorised && auth?.accountType === RECRUITER ? (
                <EditOffer />
              ) : (
                <Navigate to={MY_OFFERS} replace />
              )
            }
          />
          <Route path={PROFILE} element={<Profile />} />
          <Route path={SETTINGS} element={<Settings />} />
          <Route path="*" element={<Navigate to={OFFERS} replace />} />
        </Routes>
      </Container>
    </AuthContainer>
  </BrowserRouter>
);

const mapStateToProps = (state: AppMapState): AppMapState => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
