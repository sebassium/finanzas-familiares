import React, { Fragment } from "react";
import {Header, Video, Webinar, Content, Footer, Values, Navbar, Team} from "./components";

export default () => {
  return (
    <Fragment>
        <Navbar />
      <Header />
        <Video />
        <Content />
        <Webinar />
        <Values />
        <Team />
      <Footer />
    </Fragment>
  );
};
