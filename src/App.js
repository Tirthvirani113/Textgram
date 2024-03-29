//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import { Routes,Route } from 'react-router';
import About from './components/About';

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (massage, type)=>{
      setAlert({
        msg: massage,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
  }
  const removeBodyClasses = ()=> {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(3 24 41)';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Textgram - Dark Mode';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
      document.title = 'Textgram - Light Mode';
    }
  }
  return (
    <>
    <Navbar titleName="Textgram" featureName="About Us" mode={mode} toggleMode={toggleMode}></Navbar>
      <Alert alert={alert}></Alert>
      {/*<Navbar titleName="Hey" ></Navbar>*/}
      <div className="container my-3">
       
    <Routes> 
          <Route exact path="/about" element={<About mode={mode}/>}/>  
          <Route exact path="/"
            element={<Textform heading="Enter the text to analyse below" showAlert={showAlert} mode={mode}/>}>
          </Route>
    </Routes>
    </div>
    </>
  );
}

export default App;
