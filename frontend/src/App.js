import TopBar from './TopBar';
import Input from './Input';
import Result from './Result';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <Container fluid>
      <div className="App">
        <Form className='inputForm'>
          <TopBar />
          <div className='bottomSection'>
            <Input />
            <Result />
          </div>
          
        </Form>
        
      </div>
    </Container>
  );
}

export default App;
