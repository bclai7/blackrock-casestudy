import TopBar from './TopBar';
import Input from './Input';
import Result from './Result';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function App() {
  const [results, setResults] = useState([{n: "", x: "", y: "", z: ""}]);
  const [validInput, setValidInput] = useState(true);

  const getTimeSteps = (event, x, y, z, sigma, rho, beta, delta) => {
    event.preventDefault();
    if(isNaN(x) || isNaN(y) || isNaN(z) || isNaN(sigma) || isNaN(rho) || isNaN(beta) || isNaN(delta)) {
      setValidInput(false);
    }
    else {
      const url = `http://127.0.0.1:5000/api/v1/discretetime/${x}/${y}/${z}/${sigma}/${rho}/${beta}/${delta}`;
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
        <Form className='inputForm' onSubmit={(e) => getTimeSteps(e,1,2,1,2,1,2,1)}>
          <TopBar />
          <div className='bottomSection'>
            <Input />
            <Result results = { results } validInput = {validInput}/>
          </div>
        </Form>
        
      </div>
    </Container>
  );
}

export default App;
