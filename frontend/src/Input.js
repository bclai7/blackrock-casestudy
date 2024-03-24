import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Input({handleChange, formData}) {
  return (
    <div className="Input" data-testid="userInput">
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
            <Form.Group className="mb-3" controlId="inputFormX" data-testid="x">
                <Form.Label>x0</Form.Label>
                <Form.Control type="number" name="x" placeholder="Value" value={formData.x} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormY" data-testid="y">
                <Form.Label>y0</Form.Label>
                <Form.Control type="number" name="y" placeholder="Value" value={formData.y} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormZ" data-testid="z">
                <Form.Label>z0</Form.Label>
                <Form.Control type="number" name="z" placeholder="Value" value={formData.z} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormSigma" data-testid="sigma">
                <Form.Label>Sigma</Form.Label>
                <Form.Control type="number" name="sigma" placeholder="Value" value={formData.sigma} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormRho" data-testid="rho">
                <Form.Label>Rho</Form.Label>
                <Form.Control type="number" name="rho" placeholder="Value" value={formData.rho} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormBeta" data-testid="beta">
                <Form.Label>Beta</Form.Label>
                <Form.Control type="number" name="beta" placeholder="Value" value={formData.beta} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
          <Col xs={{span: 1}}>
            <Form.Group className="mb-3" controlId="inputFormDelta" data-testid="delta">
                <Form.Label>Delta t</Form.Label>
                <Form.Control type="number" name="delta" placeholder="Value" value={formData.delta} onChange={(e) => handleChange(e)} required/>
              </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Input;
