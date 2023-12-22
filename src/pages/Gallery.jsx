import React from 'react'
import { Helmet } from 'react-helmet';


const Gallery = () => {
    return (
        <div>
            <Helmet>
                <title>Photo Gallery</title>
            </Helmet>
            <div className='main-container'>
                <div className="section-heading">
                    <h1>Photo Gallery</h1>
                </div>

            </div>
        </div>
    )
}

export default Gallery