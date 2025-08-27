import {useState, useEffect} from 'react'

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  // Alternative of fetch, as we have no backend!

  // This will simulate a bank API call
  // setTimeout(() => {
  //   setBankData({income: 100});
  // }, 3000);

  // The problem is this fetching for infinite data (all the setTimeout) as it the state is updating. To fix this we can manage all the timeouts or fetching thing under useEffect.

  useEffect(function() {
    setTimeout(() => {
      setBankData({income: 100});
    }, 3000);
  }, []);
  
  useEffect(function() {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
    }, 1000);
  }, []);

  // Now this will run only once when the component is mounted as dependencies are empty which means we are not watching any state changes and we want it to execute only when it mounts.

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (
    <div>
        hi there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App