import React from 'react';

const story = (props) => {
    return (
        <div className="story">
            <div className="header">
                <p className="title">{props.title}</p>
                <p classNam="date">{props.date}</p>
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    );
}

export default story;