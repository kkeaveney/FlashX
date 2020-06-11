import Token from "../components/Token";
import { connect } from "react-redux";
import { tokenSelector } from "../actions/tokenSlice";

const mapStateToProps = (state) => ({
  contract: tokenSelector(state),
});

export default connect(mapStateToProps)(Token);
