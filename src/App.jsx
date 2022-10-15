import { useState } from "react";
import { Card } from "./components/Card"

export const App = () => {
  //管理者フラグ
  //__useState(false)　初期値falseの設定　boolearn型で表示/非表示の切り替え等したい際にT/Fの切り替えで片方を表示。
  const [isAdmin, setIsAdmin] = useState(false);

  //[切り替え]押下(おうか)時 読み方初めて知った。
  const onClickSwitch = () =>
    setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者フラグがtrueの時とそれ以外の文字で出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};









//original
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
