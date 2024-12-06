import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const Thanks = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: '#f8f9fa' }}>
      <Row>
        <Col md="12" className="text-center">
          <Card className="shadow-sm" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <CardBody>
              <CardTitle tag="h2" style={{ color: '#3D54A2', fontWeight: 'bold' }}>
                Thank You!
              </CardTitle>
              <CardText className="mt-3 mb-4" style={{ fontSize: '16px', color: '#6c757d' }}>
                Your submission has been received. Please wait for admin approval.
              </CardText>
              <Button
                color="primary"
                style={{
                  backgroundColor: '#3D54A2',
                  borderColor: '#3D54A2',
                  borderRadius: '5px',
                  fontSize: '16px',
                  padding: '10px 20px',
                }}
              >
                Go to Homepage
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Thanks;