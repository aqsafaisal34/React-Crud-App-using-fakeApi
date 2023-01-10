import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Read from './components/Read';

function App() {
  return (
    <div className="container">
     <Routes>
     <Route path='/' element={ <Read />} />
     <Route path='/create' element={ <Create />} />
     <Route path='/edit' element={ <Edit />} />
     </Routes>

    </div>
  );
}

export default App;
