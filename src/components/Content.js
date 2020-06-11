import React from "react";
import AccountList from "../containers/AccountList";
import ProviderList from "../containers/ProviderList";
import TransactionBlockList from "../containers/TransactionBlockList";
import TokenList from "../containers/TokenList";

const Content = () => {
  return (
    <div className="content">
      <div className="vertical-split">
        <AccountList />
        <ProviderList />
      </div>
      <TransactionBlockList />
      <div className="vertical-split"></div>
      <TokenList />
    </div>
  );
};

export default Content;
