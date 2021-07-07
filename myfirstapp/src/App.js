
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      My first React App
      <Message name="Anna"/>
      </header>
    </div>
  );
}
function Message(props) {
  return (
    <div className="Hello">
      <h2 className="Name">Hello, {props.name}!</h2> 
    </div>
  )
}

export default App;
