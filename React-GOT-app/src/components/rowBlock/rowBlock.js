import React from 'react';
import {Col, Row} from 'reactstrap';



const RowBlock = ({left, right}) => {
    return (
        <Row>
            <Col md='6' className="description-block">
                {left}
            </Col>
            <Col md='6' className="description-block">
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;