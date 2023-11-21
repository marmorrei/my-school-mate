import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import './App.css';
import EvidenceCollectionForm from './components/EvidenceCollectionForm/EvidenceCollectionForm';

const App = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <EvidenceCollectionForm />
      <Home />
    </>
  );
};

export default App;
