const Video = (e) => {
    // console.log(e);
    return (
        <>
            <div className="video-wrapper">
                <iframe src={e.content.iframe} title={e.content.ttl}></iframe>
            </div>
        </>
    );
};
    
export default Video;