import { getBackEndURL, handleRequestError, pullOutJson } from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchLocations = () => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/buildings`,
        {
            method: 'GET',
            headers,
        },
    )
        .then(handleRequestError)
        .then(pullOutJson);
};
