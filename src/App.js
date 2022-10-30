import './App.css';
import { Navbar } from './components/LayoutComponent';
import AppRouter from './components/routes/Index';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
