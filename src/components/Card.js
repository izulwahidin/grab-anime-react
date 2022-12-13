import React from 'react';

const Card = (content) => {
    const url = content.content.url.replace('/grab/gogo/videos/','/watch/');
    return (
        <>
            <div className="card">
                <a href={url}>
                        <img src={content.content.img ? content.content.img : content.content.img_secondary} alt={content.content.ttl}/>
                        <p className="card-title">{content.content.ttl} Episode {content.content.ep}</p>
                        <p className="card-time">{content.content.t}</p>
                </a>
            </div>
        </>
    )
}

export default Card;