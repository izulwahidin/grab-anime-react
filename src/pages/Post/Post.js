import { useState, useEffect } from "react";
import { ShimmerFeaturedGallery } from "shimmer-react";
import Card from "../../components/Card";
import Video from "../../components/Video";

const Post = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const path = window.location.pathname.split('watch')[1];
    const endpoint = path;

    useEffect(() => {
        fetch(`https://whd.pp.ua/grab/gogo/videos${endpoint}`)
        .then((json) => json.json())
        .then(res => {
            setData(res)
            setLoading(!loading)
        })
         .then((err) => {
            setError(err);
         })
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    
    return (
        <>
            <div className="layout-wrapper">
                <div className="content-main">
                    {
                        loading? (
                            <>
                                <ShimmerFeaturedGallery card col={3}/>
                            </>
                        ):(
                            error?(
                                console.log('Error card bang',error)
                            ):(
                                <>
                                    <div className="info-wrapper">
                                        <h1>{data.info.title}</h1>
                                        <Video content={data.info}/>
                                        <p>
                                            <b>{data.info.title.split(' Episode')[0]}</b>
                                        </p>
                                        <p>
                                            {data.info.description}
                                        </p>
                                    </div>
                                </>
                            )
                        )
                    }
                    <div className="card-wrapper">
                        {
                            loading? (
                                <>
                                    {/* <ShimmerFeaturedGallery card col={3}/> */}
                                </>
                            ):(
                                error?(
                                    console.log('Error card bang',error)
                                ):(
                                    <>
                                        <h2 className="text-xl break my-10">List Episode</h2>
                                        {
                                            data.episode_list.map(content => {
                                                return <Card content={content}/>
                                            })
                                        }
                                    </>
                                )
                            )
                        }
                    </div>
                </div>
                <div className="content-sidebar">
                    <div className="card-wrapper">
                        {
                            loading? (
                                <>
                                    <ShimmerFeaturedGallery card col={3}/>
                                </>
                            ):(
                                error?(
                                    console.log('Error card bang',error)
                                ):(
                                    data.latest.map(content => {
                                        return <Card content={content}/>
                                    })
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
};

export default Post;