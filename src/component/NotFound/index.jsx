import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
    return (
        <Container className="text-center" style={{ marginTop: '10%', marginBottom: '10%'  }}>
            <Row>
                <Col>
                    <h1 className="display-1">404</h1>
                    <h2>Không tìm thấy trang</h2>
                    <p className="lead">Trang bạn đang tìm có thể đã bị xóa, đổi tên hoặc tạm thời không có sẵn.</p>
                    <Button variant="primary" href="/">Về trang chủ</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound;
