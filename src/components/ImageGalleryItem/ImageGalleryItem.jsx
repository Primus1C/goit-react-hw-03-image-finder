import React from 'react';
import './ImageGalleryItem.css';

export default function ImageGalleryItem({ src,alt }) {
    return (
        <li className='ImageGalleryItem'>
            <img src={src} alt={alt} className='ImageGalleryItem-image'/>
        </li>
    )
}