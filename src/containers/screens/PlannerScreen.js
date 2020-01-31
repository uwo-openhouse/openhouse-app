import {
    getAllAreas,
    getAllEvents,
    isAreasLoaded,
    isEventsLoaded,
    isLocationsLoaded,
    isOpenHousesLoaded
} from "../../reducers";
import PlannerScreen from "../../screens/PlannerScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";

const mapStateToProps = state => ({
    events: getAllEvents(state),
    areas: getAllAreas(state),
    isLoaded: isEventsLoaded(state) && isLocationsLoaded(state) && isAreasLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(Loadable(PlannerScreen));
