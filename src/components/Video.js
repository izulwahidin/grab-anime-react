import React from 'react';

const Video = (e) => {
    return (
        <>
            <div className="video-wrapper">
                <iframe src={e.content.iframe} title={e.content.ttl}></iframe>
            </div>
        </>
    );
};
    
export default Video;