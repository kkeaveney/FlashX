import TransactionBlock from "../components/TransactionBlock";
import { connect } from "react-redux";
import { web3Selector, currentProviderSelector } from "../actions/web3Slice";

const mapStateToProps = (state) => ({
  web3: web3Selector(state),
  currentProvider: currentProviderSelector(state),
});

export default connect(mapStateToProps)(TransactionBlock);
