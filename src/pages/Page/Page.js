import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

const Page = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const path = window.location.pathname;
    const query = window.location.search;
    let getPath;
    switch (path) {
        case '/raw':
            getPath = '/recently-added-raw';
            break;
         case '/dub':
            getPath = '/recently-added-dub';
            break;
         case '/movies':
            getPath = '/movies';
            break;
         case '/season':
            getPath = '/new-season';
            break;
         case '/popular':
            getPath = '/popular';
            break;
         case '/ongoing':
            getPath = '/ongoing-series';
            break;
        default:
            getPath = '/';
            break;
    }
    
    const endpoint = getPath;

    useEffect(() => {
        fetch(`https://whd.pp.ua/grab/gogo${endpoint+query}`)
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
            <div className="card-wrapper">
                {
                    loading? (
                        <>
                            Lagi Loading...
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
            <div className="pagination-wrapper">
                {
                    loading? (
                        <>
                            {/* Lagi Loading... */}
                        </>
                    ):(
                        error?(
                            console.log('Error pagination bang',error)
                        ):(
                            data.pagination.map(data => {
                                return <Pagination data={[data,path]}/>
                            })
                        )
                    )
                }
            </div>
        </>
    )
};

export default Page;