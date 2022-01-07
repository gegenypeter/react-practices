import './App.css';
import ButtonWithClass from './buttonWithClass';
import ButtonWithHook from './buttonWithHook';


/*
const obj1 = {
  key1: "random stuff",
  key2: obj3
}
const obj2 = {
  key1: "random stuff 2",
  key2: obj3
}
const obj3 = {
  key1: "random stuff 3",
}
*/

function App() {
return (
    <div className="App">
      <ButtonWithClass />
      <ButtonWithHook />
    </div>
  );
}

export default App;
