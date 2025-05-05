import './App.css';
import { CountdownWidget } from 'widget-hub/widgets/CountdownWidget';
import { useMessageBridge } from './hooks/useMessageBridge';
import { useState } from 'react';

function App() {
  const [msgFromWidget, setMsgFromWidget] = useState("");
  useMessageBridge({
    onMessage: (data) => {
      setMsgFromWidget(data.payload || data);
    }
  });

  return (
    <>
      <h1>React Sample application</h1>
      <CountdownWidget initialDuration={3}/>
      <p>Message from Countdown Widget </p>
      <div><strong>{typeof msgFromWidget === 'object' ? JSON.stringify(msgFromWidget) : msgFromWidget}</strong></div>
    </>
  );
}

export default App;
