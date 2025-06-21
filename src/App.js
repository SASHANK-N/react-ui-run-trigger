import React from 'react';

function App() {
  const callApi = async () => {
    const res = await fetch('https://<APIGEE-URL>/api/hello');
    const text = await res.text();
    alert(text);
  };

  return (
    <div>
      <h1>Frontend React App</h1>
      <button onClick={callApi}>Call Backend</button>
    </div>
  );
}

export default App;
