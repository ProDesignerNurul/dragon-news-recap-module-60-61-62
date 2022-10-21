import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import RightSideNav from '../RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Row>
                    <Col xl="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col xl="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col xl="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>

        </div>
    );
};

export default Main;