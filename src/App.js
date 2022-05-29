import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [_key, setKey] = useState(1);
  
  return (
    <Header onMenuChange={(key) => {
      setKey(key);
    }} />
  );
}

export default App;
