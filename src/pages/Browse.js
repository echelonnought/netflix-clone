import React from 'react';
import  {useContent}  from '../hooks';
import { BrowseContainer } from '../containers/browse';
import selectionFilter from '../utils/selection-filter';

function Browse() {
    const { films } = useContent('films');
    const { series } = useContent('series');
    console.log(films);
    console.log(series);
    const slides = selectionFilter({ series, films})
    console.log(slides)
    return (
        <BrowseContainer slides={slides}/>
    )
}

export default Browse;
