import Account from "../components/Account";
import { connect } from "react-redux";
import { accountBalanceSelector, web3Selector } from "../actions/web3Slice";

const mapStateToProps = (state) => ({
  balance: accountBalanceSelector(state),
  web3: web3Selector(state),
});

export default connect(mapStateToProps)(Account);
