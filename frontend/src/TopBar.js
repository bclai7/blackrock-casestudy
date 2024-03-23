import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopBar({getTimeSteps}) {

  return (
    <div className="TopBar sectionHeader">
        <Row>
            <Col xs={{ span: 4 }}>
                AI Labs | <b>Full Stack Case Study</b>
            </Col>
            <Col xs={{ span: 1, offset: 7 }}>
                <Button className='runButton' type="button" variant="primary" onClick={() => getTimeSteps(1,2,1,2,1,2,1)}>
                    Run
                </Button>
            </Col>
            
        </Row>

    </div>
  );
}

export default TopBar;
