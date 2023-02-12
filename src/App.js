
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Begin from './Comonents/begin';
import {Main} from './Comonents/SelectNums';
import {Select} from './Comonents/SelectNums';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Begin/>}/>
        <Route path='start' element={<Select />}/>
        <Route path='start/:l' element={<Main />}/>
      </Routes>
    </>
  );
}

export default App;
