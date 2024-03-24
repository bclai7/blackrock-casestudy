import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopBar() {

  return (
    <div className="TopBar sectionHeader" data-testid="topBar">
        <Row>
            <Col xs={{ span: 4 }}>
                AI Labs | <b>Full Stack Case Study</b>
            </Col>
            <Col xs={{ span: 1, offset: 7 }}>
                <Button className='runButton' type="submit" variant="primary" data-testid="runButton">
                    Run
                </Button>
            </Col>
            
        </Row>

    </div>
  );
}

export default TopBar;
