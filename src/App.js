import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import NavBar from './components/navbar/navbar';
import AddStudent from './screens/addstudent';
import ViewStudent from './screens/viewStudent';
import ViewSingleStudent from './screens/viewSingleStudent';
import DeleteStudent from './screens/deletestudent';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addStudent' element={<AddStudent />} />
        <Route path='/viewStudents' element={<ViewStudent />} />
        <Route path='/viewSingleStudent' element={<ViewSingleStudent />} />
        <Route path='/deleteStudent' element={<DeleteStudent />} />
      </Routes>
    </div>
  );
}

export default App;
