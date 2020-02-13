import {
    isEateriesLoaded,
    isLocationsLoaded,
    isOpenHousesLoaded,
    getEatery,
    getLocation
} from "../../reducers";
import EateryDetailsScreen from "../../screens/EateryDetailsScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";

const mapStateToProps = (state, { navigation }) => {
    const eatery = getEatery(state, navigation.getParam('eateryID'));
    return ({
        building: getLocation(state, eatery.building),
        eatery,
        isLoaded: isEateriesLoaded(state) && isLocationsLoaded(state) && isOpenHousesLoaded(state),
    });
};

export default connect(mapStateToProps)(Loadable(EateryDetailsScreen));
