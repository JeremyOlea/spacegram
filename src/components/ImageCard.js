import React from 'react'
import './ImageCard.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

export default function ImageCard({ title,  desc }) { // TODO: Add date
    return (
        <Card className='custom-card'>
            <Card.Title className='custom-card-title'>
                {title}
            </Card.Title>
            <Card.Img  src='https://apod.nasa.gov/apod/image/2201/OrionStarFree3_Harbison_1080.jpg'/>
            <Card.Text className='custom-card-text'>
                {desc}
            </Card.Text>
        </Card>
    )
}
