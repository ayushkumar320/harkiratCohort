import {RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState} from "recoil";
import {networkAtom, jobsAtom, messagingAtom, notificationAtom, totalNotificationSelector} from "./atoms";
import {useMemo} from "react";
function App() {
  return (
    <RecoilRoot>
      <NetworkStatus />
    </RecoilRoot>
  );
}

function NetworkStatus() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  const format = (count) => (count >= 100 ? "99+" : count);


  // Suppose we want to show all notification count in Me, then we can do 
  // const totalCount = useMemo(() => {
  //   return parseInt(networkNotificationCount) + parseInt(jobsCount) + parseInt(messagingAtomCount) + parseInt(notificationCount);
  // }, [networkNotificationCount, jobsCount, messagingAtomCount, notificationCount]);

  // The problem is solved by above code, but Recoil gives us a selector
  const totalCount = useRecoilValue(totalNotificationSelector);

  return (
    <>
      <button>Home</button>
      <button>My network ({format(networkNotificationCount)})</button>
      <button>Jobs ({format(jobsCount)})</button>
      <button>Messaging ({format(messagingAtomCount)})</button>
      <button>Notification ({format(notificationCount)})</button>
      {/* <Buttonupdator /> */}
      <button 
        onClick={() => {
          setMessagingAtomCount(messagingAtomCount + 1);
        }}
      >Me({totalCount})</button>
    </>
  );
}

// function Buttonupdator() {
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom);
//   return (
//     <button 
//         onClick={() => {
//           setMessagingAtomCount(c => c + 1);
//         }}
//       >Me</button>
//   )
// }

export default App;
