import {
    isEventsLoaded,
    isLocationsLoaded,
    isOpenHousesLoaded,
	getEvent,
	getLocation,
} from "../../reducers";
import EventDetailsScreen from "../../screens/EventDetailsScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";

const mapStateToProps = (state, { navigation }) => ({
	building: navigation.getParam('building'),
	event: getEvent(state, navigation.getParam('event')),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(EventDetailsScreen);