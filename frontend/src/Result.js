import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function Result(props) {
  const results = props.results;
  const validInput = props.validInput;
  const errorOccurred = props.errorOccurred;
  if(errorOccurred) {
    return (
        <Row>
            <Col>
                <div className='errorOccured'>An error has occurred</div>
            </Col>
        </Row>
    );
  }
  if(validInput) {
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
                            {results?.map((result) => (
                                <tr key={result.n}>
                                    <td>{result.n}</td>
                                    <td>{result.x}</td>
                                    <td>{result.y}</td>
                                    <td>{result.z}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </Col>
                </Row>
          </div>
        </div>
      );
  }
  else {
    return (
        <Row>
            <Col>
                <div className='invalidInput'>Invalid Input</div>
            </Col>
        </Row>
    );
  }
}

export default Result;