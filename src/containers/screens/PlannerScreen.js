import {
    getAllAreas,
    getAllEvents,
    isAreasLoaded,
    isEventsLoaded,
    isLocationsLoaded,
    isOpenHousesLoaded,
    getAllEventsInPlanner
} from "../../reducers";
import PlannerScreen from "../../screens/PlannerScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";

const mapStateToProps = state => ({
    events: getAllEvents(state),
    areas: getAllAreas(state),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isAreasLoaded(state) && isOpenHousesLoaded(state),
    eventsInPlanner: getAllEventsInPlanner(state),
});

export default connect(mapStateToProps)(Loadable(PlannerScreen));
