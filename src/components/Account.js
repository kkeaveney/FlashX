import React from "react";
import PropTypes from "prop-types";

const Account = ({ balance }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Account</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Balance</th>
                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className={`order-${balance}`}>
                <td>{balance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Account.defaultProps = {
  balance: "",
};

Account.propTypes = {
  balance: PropTypes.string,
};

export default Account;
