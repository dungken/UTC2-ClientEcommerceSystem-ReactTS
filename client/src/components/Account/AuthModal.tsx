import React, { useState } from 'react';
import { Modal, Button, Form, Tab, Tabs } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

interface AuthModalProps {
    show: boolean;
    handleClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ show, handleClose }) => {
    const [activeTab, setActiveTab] = useState('login');

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Cool Club</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Rất nhiều đặc quyền và quyền lợi mua sắm đang chờ bạn</h5>
                <div className="d-flex justify-content-between my-3">
                    <Button variant="outline-secondary">Voucher ưu đãi</Button>
                    <Button variant="outline-secondary">Quà tặng độc quyền</Button>
                    <Button variant="outline-secondary">Hoàn tiền Coolcash</Button>
                </div>
                <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'login')} className="mb-3">
                    <Tab eventKey="login" title="Đăng nhập">
                        <Form>
                            <Form.Group controlId="loginEmail">
                                <Form.Label>Email/UserName của bạn</Form.Label>
                                <Form.Control type="email" placeholder="Nhập Email/Username" />
                            </Form.Group>
                            <Form.Group controlId="loginPassword" className="mt-3">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Nhập mật khẩu" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mt-3">Đăng nhập</Button>
                        </Form>
                    </Tab>

                    <Tab eventKey="register" title="Đăng ký">
                        <Form>
                            <Form.Group controlId="registerName">
                                <Form.Label>Tên của bạn</Form.Label>
                                <Form.Control type="text" placeholder="Nhập tên của bạn" />
                            </Form.Group>
                            <Form.Group controlId="registerPhone" className="mt-3">
                                <Form.Label>SĐT của bạn</Form.Label>
                                <Form.Control type="text" placeholder="Nhập SĐT của bạn" />
                            </Form.Group>
                            <Form.Group controlId="registerEmail" className="mt-3">
                                <Form.Label>Email của bạn</Form.Label>
                                <Form.Control type="email" placeholder="Nhập email của bạn" />
                            </Form.Group>
                            <Form.Group controlId="registerPassword" className="mt-3">
                                <Form.Label>Mật khẩu</Form.Label>
                                <Form.Control type="password" placeholder="Nhập mật khẩu" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100 mt-3">Đăng ký tài khoản</Button>
                        </Form>
                        <div className="text-center mt-3">
                            <a href="#" onClick={() => setActiveTab('login')}>Đăng nhập</a>
                        </div>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;
