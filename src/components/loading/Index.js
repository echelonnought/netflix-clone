import React from 'react';
import { Spinner, LockBody, Picture, ReleaseBody } from './styles/loading';

function Loading({ src, ...restProps }) {
    return (
        <Spinner { ...restProps }>
            <LockBody />
            <Picture src = {`/images/users/${src}.png`} data-testid="loading"/>
        </Spinner>
    )
}

export default Loading;

Loading.ReleaseBody = function LoadingReleaseBody({ ...restProps}) {
    return <ReleaseBody { ...restProps }/>
}
