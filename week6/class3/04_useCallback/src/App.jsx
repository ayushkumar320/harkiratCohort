import {useEffect, useState, memo, useCallback} from "react";

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

  // useCallback is about not rendering a child component, if the function hasnt/doesnt need to change across renders
  // Basically useCallback is useMemo but for functions

  const calculateCryptoReturn = useCallback(
    function () {
      return exchange1Data.returns + exchange2Data.returns;
    },
    [exchange1Data, exchange2Data]
  );

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturn={calculateCryptoReturn} />
    </div>
  );
}


const CryptoGainsCalculator = memo(function Child({calculateCryptoReturn}) {
  console.log("crypto child rendered");
  return <div>Your crypto returns are {calculateCryptoReturn()}</div>;
});

export default App;
/*
  useCallback is used to memoize a function so its reference does not change unless its dependencies change.
  React.memo is used to memoize a component so it only re-renders if its props change.
*/