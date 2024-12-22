
import "./App.css";
import Card from "./Components/Card/Card";

import { Data } from "./data";

const App = () => {
  console.log(Data);

  return (
    <>
      {Data.map((e, i) => {
        return <Card key={i} id={e.id} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />;
      })}
    </>
  );
};

export default App;
