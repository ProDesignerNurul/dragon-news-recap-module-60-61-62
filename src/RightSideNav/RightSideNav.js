import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaTwitch, FaInstagram, FaPinterest } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
    return (
        <div>
            <h2>this is right side nav</h2>
            <div>
                <ButtonGroup vertical>
                    <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign In With Google</Button>
                    <Button variant="outline-dark"><FaGithub></FaGithub> Sign in With GitHub</Button>
                </ButtonGroup>
            </div>
            <div>
                <h2 className='my-3'>Find US Below</h2>
                <ListGroup>
                    <ListGroup.Item className='my-1'><FaFacebook></FaFacebook> Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='my-1'><FaTwitter></FaTwitter> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='my-1'><FaTwitch></FaTwitch> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='my-1'><FaInstagram></FaInstagram> Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='my-1'><FaPinterest></FaPinterest> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;