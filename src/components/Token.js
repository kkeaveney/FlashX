import React from 'react'
import PropTypes from 'prop-types'

const Token = ({ contract, contractBalance }) => {
  const address = contract.address
  return (
    <div className="vertical">
      <div className="card bg-dark text-white">
        <div className="card-header">Contracts</div>
        <div className="card-body">
          <table className="table table-dark table-sm small">
            <thead>
              <tr>
                <th>Flashloan</th>
                <th>Balance</th>
                <th></th>
                <th></th>

                {/* <th>DAPP</th>
                <th>DAPP/ETH</th> */}
              </tr>
            </thead>
            <tbody>
              <a
                href={`https://etherscan.io/address/${address}`}
                class="nav-link text-muted"
              >
                {address}
                {contractBalance}
              </a>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

Token.defaultProps = {
  contract: {},
  contractBalance: '',
}

Token.propTypes = {
  contract: PropTypes.object.isRequired,
  contractBalance: PropTypes.string.isRequired,
}

export default Token
