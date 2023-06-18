import './App.css';
import TodoApp from './component/TodoApp';

function App() {
  return (
    <div className="App">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="box">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
