import {Routes, Route} from "react-router-dom";
import './app.css';
import Open from "./component/Open";
import Gainers from "./component/Gainers";
import Reversal from "./component/Reversal";
import Home from "./component/Home";
import Overbought from "./component/Overbought";
import Intraday from "./component/Intraday";

function App() {
  return (
    <>
    <div className="main-body-class">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/gainers" element={ <Gainers /> } />
        <Route path="/intraday" element={ <Intraday /> } />
        <Route path="/open" element={ <Open /> } />
        <Route path="/overbought" element={ <Overbought /> } />
        <Route path="/reversal" element={ <Reversal /> } />
      </Routes>
    </div>
    </>
  );
}

export default App;
