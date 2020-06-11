import React from "react";
import PropTypes from "prop-types";

const Provider = ({ provider, currentProvider }) => {
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Provider</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Network Version</th>
                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <tr className={`order-$`}>
                <td>{provider}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Provider.defaultProps = {
  provider: "",
};

Provider.propTypes = {
  provider: PropTypes.string,
};

export default Provider;
