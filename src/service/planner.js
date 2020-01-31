import { getBackEndURL, handleRequestError } from "./index";

// eslint-disable-next-line import/prefer-default-export
export const sendAddToPlanner = (eventID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events/${eventID}/attendees`,
        {
            method: 'POST',
            headers,
        },
    )
        .then(handleRequestError);
};

export const sendRemoveFromPlanner = (eventID) => {
    const headers = new Headers({
        'content-type': 'application/json',
    });

    return fetch(
        `${getBackEndURL()}/events/${eventID}/attendees`,
        {
            method: 'DELETE',
            headers,
        },
    )
        .then(handleRequestError);
};
