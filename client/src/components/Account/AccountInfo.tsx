import React from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

type AccountInfoProps = {
    name: string;
    phoneNumber: string;
    gender?: string;
    birthDate?: string;
    height?: string;
    weight?: string;
    email: string;
    password: string;
};

const AccountInfo: React.FC<AccountInfoProps> = ({
    name,
    phoneNumber,
    gender = "Chưa cập nhật",
    birthDate = "Hãy cập nhật ngày sinh để coolmate gửi cho bạn 1 phần quà đặc biệt nhé",
    height = "Chưa cập nhật",
    weight = "Chưa cập nhật",
    email,
    password,
}) => {
    return (
        <div className="account-info">
            <h2>Thông tin tài khoản</h2>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="name">
                            <Form.Label>Họ và tên</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={name} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={phoneNumber} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="gender">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={gender} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="birthDate">
                            <Form.Label>Ngày sinh</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={birthDate} />
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Form.Group controlId="height">
                            <Form.Label>Chiều cao</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={height} />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="weight">
                            <Form.Label>Cân nặng</Form.Label>
                            <Form.Control type="text" readOnly defaultValue={weight} />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" className="mt-3">CẬP NHẬT</Button>
            </Form>

            <h2 className="mt-4">Thông tin đăng nhập</h2>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" readOnly defaultValue={email} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Mật khẩu</Form.Label>
                    <Form.Control type="password" readOnly defaultValue={password} />
                </Form.Group>

                <Button variant="primary" className="mt-3">CẬP NHẬT</Button>
            </Form>
        </div>
    );
};

export default AccountInfo;
