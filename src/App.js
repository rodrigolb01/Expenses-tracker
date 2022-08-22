import './App.css';
import dio from './pics/wryy.gif'
import Header from './components/Header';
import IncomeExpenseBox from './components/IncomeExpenseBox';
import HistoryBox from './components/HistoryBox';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IncomeExpenseBox></IncomeExpenseBox>
      <HistoryBox></HistoryBox>
    </div>
  );
}

export default App;
