import React from "react";
import PropTypes from "prop-types";

const Token = ({ contract, contractBalance }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Contracts</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Token</th>

                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className={`order-$`}>
                <td>{contract.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Token.defaultProps = {
  contract: {},
  contractBalance: "",
};

Token.propTypes = {
  contract: PropTypes.object.isRequired,
  contractBalance: PropTypes.string.isRequired,
};

export default Token;
