import NavBar from './components/NavBar/NavBar';
// import Home from './pages/Home/Home';
import './App.css';
import TeacherTabs from './pages/TeacherTabs/TeacherTabs';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <TeacherTabs />
      {/* <Home /> */}
    </>
  );
};

export default App;
