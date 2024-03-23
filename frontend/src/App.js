import TopBar from './TopBar';
import Input from './Input';
import Result from './Result';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState([{n: 1, x: 2, y: 3, z: 4}]);

  useEffect(() => {
    console.log('use effect ran');
  });
  return (
    <Container fluid>
      <div className="App">
        <Form className='inputForm'>
          <TopBar />
          <div className='bottomSection'>
            <Input />
            <Result results = { results }/>
          </div>
          
        </Form>
        
      </div>
    </Container>
  );
}

export default App;
