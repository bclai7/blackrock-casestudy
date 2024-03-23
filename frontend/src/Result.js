import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Result() {
  return (
    <div className="Result">
        <div className='resultHeader sectionHeader'>
            <Row>
                <Col>
                    Results
                </Col>
            </Row>
      </div>

      <div className='resultSection'>
            <Row>
                <Col>
                <Table bordered hover>
                    <thead className='tableHeader'>
                        <tr>
                        <th>N</th>
                        <th>X</th>
                        <th>Y</th>
                        <th>Z</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
      </div>
    </div>
  );
}

export default Result;