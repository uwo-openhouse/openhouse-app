import React from "react";
import * as PropTypes from "prop-types";
import Loading from "./Loading";


const Loadable = (WrappedComponent) => {
    const LoadableComponent = (props) => {
        const { isLoading, isLoaded } = props;
        if ((isLoading !== null && !isLoading) || (isLoaded !== null && isLoaded)) {
            return (
                <WrappedComponent {...props} />
            );
        }
        return (<Loading/>);
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
