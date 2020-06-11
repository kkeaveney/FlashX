import React, { Component } from "react";
import { connect } from "react-redux";
import NavBarList from "../containers/NavBarList";
import Content from "./Content";

import "./App.css";

import { loadToken } from "../interactions";
import {
  loadWeb3,
  loadAccount,
  loadAccountBalance,
  loadProvider,
} from "../interactions";

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch);
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch);
    await loadAccount(web3, dispatch);
    await loadAccountBalance(web3, dispatch);
    await loadProvider(web3, dispatch);

    const networkId = await web3.eth.net.getId();

    const token = await loadToken(web3, networkId, dispatch);
    if (!token) {
      window.alert("Token smart contract not detected on the current network");
      return;
    }
  }

  render() {
    return (
      <div>
        <NavBarList />
        <Content />
      </div>
    );
  }
}

export default connect()(App);
