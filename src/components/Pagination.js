import React from 'react';

const Pagination = (data) => {
    const path = data.data[1];
    const pg = path + data.data[0].page;
    const classN = data.data[0].class;
    const text = data.data[0].text;

    return (
        <>
            <a className={classN} href={pg}>{text}</a>
        </>
    )
}

export default Pagination;