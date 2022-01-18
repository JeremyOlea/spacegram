import { useState } from 'react'
import './ImageCard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";

export default function ImageCard({ title,  desc, url, date }) { // TODO: Add date
    const [liked, setLiked] = useState(false);

    function likePost() {
        setLiked(!liked)
    }

    return (
        <Card className='custom-card'>
            <Card.Title className='custom-card-title'>
                {title}
            </Card.Title>
            <Card.Img  src={url} alt={title}/>
            <div className='card-buttons'>
                {!liked ? <BsSuitHeart className='unliked-button' size={22}
                    onClick={() => likePost()}></BsSuitHeart> 
                : <BsSuitHeartFill className='liked-button' size={22}
                    onClick={() => likePost()}></BsSuitHeartFill>}
            </div>
            <Card.Text className='custom-card-text'>
                {desc}
            </Card.Text>
            <div className='card-date-field'>
                {date}
            </div>
        </Card>
    )
}
