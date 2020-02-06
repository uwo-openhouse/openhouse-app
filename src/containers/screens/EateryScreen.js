import {
    getAllEateries,
    isEateriesLoaded,
    isLocationsLoaded,
    isOpenHousesLoaded
} from "../../reducers";
import EateryScreen from "../../screens/EateryScreen";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    eateries: getAllEateries(state),
    isLoaded: isEateriesLoaded(state) && isLocationsLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(EateryScreen);
