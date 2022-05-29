import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";

function App() {
  const [key, setKey] = useState(1);

  return (
    <>
      <Header onMenuChange={(_key) => {
        setKey(_key);
      }} />

      <div className="md:container md:mx-auto p-8 h-screen page-content">
        {/* <Card /> */}
        
        {
          key === 1 && <CoronaForCountry />
        }

        {
          key === 2 && <RecordedCorona />
        }
      </div>
    </>
  );
}

export default App;
