import React from 'react';
import Story from '../Story/Story';

const newsFeed = (props) => {
    let stories = props.stories.map(prop => <Story title={prop.title} date={prop.date} description={prop.description} />);
    return (
        <div className="newsFeed">
            {stories}
        </div>
    )
}

export default newsFeed;