import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import * as PropTypes from "prop-types";


const Loadable = (WrappedComponent) => {
    const LoadableComponent = (props) => {
        const { isLoading, isLoaded } = props;
        if ((isLoading !== null && !isLoading) || (isLoaded !== null && isLoaded)) {
            return (
                <WrappedComponent {...props} />
            );
        }
        return (<FontAwesomeIcon icon={faSyncAlt} spin />);
    };

    LoadableComponent.propTypes = {
        isLoading: PropTypes.bool,
        isLoaded: PropTypes.bool,
    };

    LoadableComponent.defaultProps = {
        isLoading: null,
        isLoaded: null,
    };
    return LoadableComponent;
};

export default Loadable;
