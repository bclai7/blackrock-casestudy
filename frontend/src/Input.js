import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Input() {
  return (
    <div className="Input">
      <div className='inputHeader sectionHeader'>
        <Row>
          <Col>
            Inputs
          </Col>
        </Row>
      </div>
      
      <div className='inputFields'>
        <Row>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormX">
                <Form.Label>x0</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormY">
                <Form.Label>y0</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormZ">
                <Form.Label>z0</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormSigma">
                <Form.Label>Sigma</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormRho">
                <Form.Label>Rho</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormBeta">
                <Form.Label>Beta</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormDelta">
                <Form.Label>Delta t</Form.Label>
                <Form.Control type="number" placeholder="Value" required/>
              </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Input;
