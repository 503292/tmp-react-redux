import React, { Component } from "react";
import scss from "./Footer.module.scss";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <p className={scss.footer}>footer</p>
      </>
    );
  }
}

export default Footer;
