import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavBarList from '../containers/NavBarList'
import Content from './Content'

import './App.css'

import {
  loadWeb3,
  loadAccount,
  loadAccountBalance,
  loadProvider,
  loadToken,
  loadtokenBalance,
} from '../interactions'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData(this.props.dispatch)
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadWeb3(dispatch)
    const account = await loadAccount(web3, dispatch)

    await loadAccountBalance(web3, dispatch)
    await loadProvider(web3, dispatch)

    const networkId = await web3.eth.net.getId()

    const token = await loadToken(web3, networkId, dispatch)
    const tokenAddress = '0xA328e27b22d27a9Afdbc2A330a736382dB721656'
    const tokenBalance = await loadtokenBalance(web3, tokenAddress, dispatch)

    if (!token) {
      window.alert('Token smart contract not detected on the current network')
      return
    }
  }

  render() {
    return (
      <div>
        <NavBarList />
        <Content />
      </div>
    )
  }
}

export default connect()(App)
