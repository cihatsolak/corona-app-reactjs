import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import CoronaForCountry from "./components/CoronaForCountry";

function App() {
  const [_key, setKey] = useState(1);

  return (
    <>
      <Header onMenuChange={(key) => {
        setKey(key);
      }} />

      <div className="md:container md:mx-auto p-8 h-screen page-content">
        {/* <Card /> */}
        <CoronaForCountry />
      </div>
    </>
  );
}

export default App;
