import {useEffect, useState, useMemo} from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    // Some operation to get the data
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    // Some operation to get the data
    setTimeout(() => {
      setBankData({
        income: 100,
      });
    }, 5000);
  }, []);

  // const cryptoReturns = exchange1Data.returns + exchange2Data.returns; // This is an expensive calculation, so we can use useMemo to optimize it such that it only recalculates when the dependencies change if we dont add, when the bankData changes, this calculation will run again!

  const cryptoReturns = useMemo(function() {
    return exchange1Data.returns + exchange2Data.returns;
  }, [exchange1Data, exchange2Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return <div>hi there, your income tax returns are {incomeTax}</div>;
}

export default App;
