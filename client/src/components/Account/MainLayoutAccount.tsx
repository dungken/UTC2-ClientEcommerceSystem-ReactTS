// App.tsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileInfo from './ProfileInfo';
import SidebarAccount from './SidebarAccount';
import MainContentAccount from './MainContentAccount';
import AccountInfo from './AccountInfo';
import Header from '../Layout/Header';

const MainLayoutAccount: React.FC = () => {
    return (
        <div>
            <Header />
            <Container className="" style={{ padding: '150px 0px 20px 0px' }}>
                <ProfileInfo />
                <Row>
                    <Col md={3}>
                        <SidebarAccount />
                    </Col>
                    <Col md={9}>
                        {/* <MainContentAccount /> */}
                        <AccountInfo
                            name="Hà Văn Dũng"
                            phoneNumber="0327250461"
                            email="brave2112love@gmail.com"
                            password="********"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainLayoutAccount;
