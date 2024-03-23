import TopBar from './TopBar';
import Input from './Input';
import Result from './Result';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function App() {
  const [results, setResults] = useState([{n: "", x: "", y: "", z: ""}]);
  const [validInput, setValidInput] = useState(true);
  const [formData, setFormData] = useState({
    x: '',
    y: '',
    z: '',
    sigma: '',
    rho: '',
    beta: '',
    delta: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const getTimeSteps = (event) => {
    event.preventDefault();
    if(isNaN(formData.x) || isNaN(formData.y) || isNaN(formData.z) || isNaN(formData.sigma) || isNaN(formData.rho) || isNaN(formData.beta) || isNaN(formData.delta)) {
      setValidInput(false);
    }
    else {
      const url = `http://127.0.0.1:5000/api/v1/discretetime/${formData.x}/${formData.y}/${formData.z}/${formData.sigma}/${formData.rho}/${formData.beta}/${formData.delta}`;
      fetch(url).then(res => {
        return res.json();
      })
      .then(data => {
        setResults(data["data"]);
      });
    }
  };
  
  return (
    <Container fluid>
      <div className="App">
        <Form className='inputForm' onSubmit={(e) => getTimeSteps(e)}>
          <TopBar />
          <div className='bottomSection'>
            <Input handleChange={handleChange} formData={formData}/>
            <Result results = { results } validInput = {validInput}/>
          </div>
        </Form>
        
      </div>
    </Container>
  );
}

export default App;
