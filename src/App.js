import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './Pages/Form';
import FormTable from './Pages/FormTable';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/user-details' element={<FormTable/>}/>
    </Routes>
  );
}

export default App;
