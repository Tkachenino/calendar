import Calendar from './components/Calendar';
import './App.css';

function App() {
  const now = new Date();

  return (
    <div className="App">
      <Calendar date={now} />
    </div>
  );
}

export default App;
