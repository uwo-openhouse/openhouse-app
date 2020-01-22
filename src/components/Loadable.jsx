import React from "react";
import * as PropTypes from "prop-types";
import {ActivityIndicator, StyleSheet} from "react-native";
import Colors from "../constants/Colors";


const Loadable = (WrappedComponent) => {
    const LoadableComponent = (props) => {
        const { isLoading, isLoaded } = props;
        if ((isLoading !== null && !isLoading) || (isLoaded !== null && isLoaded)) {
            return (
                <WrappedComponent {...props} />
            );
        }
        return (<ActivityIndicator style={styles.loading} size="large" color={Colors.westernPurple} />);
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

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Loadable;
