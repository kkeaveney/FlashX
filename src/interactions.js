import Web3 from "web3";
import Token from "./abis/Token.json";
import { tokenLoaded } from "./actions/tokenSlice";
import {
  web3Loaded,
  web3AccountLoaded,
  balanceLoaded,
  providerLoaded,
  currentProviderLoaded,
} from "./actions/web3Slice";
import { getAccount } from "./helpers";

////// Web3 Interactions /////////

export const loadWeb3 = (dispatch) => {
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  dispatch(web3Loaded(web3));
  dispatch(currentProviderLoaded(web3._currentProvider.host));
  return web3;
};

export const loadAccount = async (web3, dispatch) => {
  const account = await getAccount();
  dispatch(web3AccountLoaded(account));
  return account;
};

export const loadAccountBalance = async (web3, dispatch) => {
  const account = await getAccount();
  const balanceAsWei = await web3.eth.getBalance(account);
  const balance = web3.utils.fromWei(balanceAsWei, "ether");
  dispatch(balanceLoaded(balance));
  return balance;
};

export const loadProvider = async (web3, dispatch) => {
  const provider = web3._currentProvider.connection.networkVersion;
  dispatch(providerLoaded(provider));
};

////// Token Interactions ///////

export const loadToken = async (web3, networkId, dispatch) => {
  try {
    const token = web3.eth.Contract(
      Token.abi,
      Token.networks[networkId].address
    );

    dispatch(tokenLoaded(token));

    return token;
  } catch (error) {
    console.log("Contract not deployed to the current network");
    return null;
  }
};
