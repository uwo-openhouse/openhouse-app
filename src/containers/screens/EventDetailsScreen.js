import {
    isEventsLoaded, isLocationsLoaded, isOpenHousesLoaded, getEvent, getLocation, eventIsInPlanner,
} from "../../reducers";
import EventDetailsScreen from "../../screens/EventDetailsScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";
import {addToPlanner, removeFromPlanner} from "../../actions/planner";
import {bindActionCreators} from "redux";

const mapStateToProps = (state, { navigation }) => {
    const event = getEvent(state, navigation.getParam('eventID'));
    return ({
        building: getLocation(state, event.building),
        event,
        isInPlanner: eventIsInPlanner(state, event.uuid),
        isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isOpenHousesLoaded(state),
    });
};

const mapDispatchToProps = dispatch => bindActionCreators({
    addToPlanner,
    removeFromPlanner,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Loadable(EventDetailsScreen));
