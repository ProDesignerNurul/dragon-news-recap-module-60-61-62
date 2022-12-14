import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
    console.log(news)
    const { _id, title, author, details, image_url, total_view } = news;
    return (
        <Card className="mb-5">
            <Card.Header className="d-flex justify-content-between">
                <div className="d-flex">
                    <Image
                    roundedCircle
                    src={author.img}
                    style={{height: '40px'}}
                    ></Image>
                    <div>
                        <p>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 200 ?
                            <p> {details?.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>Learn More</Link> </p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsSummeryCard;