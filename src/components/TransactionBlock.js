import React from "react";
import PropTypes from "prop-types";

const TransactionBlock = ({ web3, currentProvider }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Injected Web3</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Network</th>
                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className={`order-$`}>
                <td>{currentProvider}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

TransactionBlock.defaultProps = {
  web3: {},
};

TransactionBlock.propTypes = {
  web3: PropTypes.object.isRequired,
};

export default TransactionBlock;
