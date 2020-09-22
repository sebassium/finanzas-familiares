import React, { Fragment } from "react";
import {Header, Webinar1, Webinar2, Content, Footer, Values, Navbar} from "./components";

export default () => {
  return (
    <Fragment>
        <Navbar />
      <Header />
        <Webinar1 />
        <Content />
        <Values />
        <Webinar2 />
      <Footer />
    </Fragment>
  );
};
