import './App.css';
import Header from './components/Header';
import IncomeExpenseBox from './components/IncomeExpenseBox';
import HistoryBox from './components/HistoryBox';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <div className="App">
        <Header/>
        <IncomeExpenseBox/>
        <HistoryBox/>
        <Footer/>
      </div>
    </GlobalProvider>
  );
}

export default App;
