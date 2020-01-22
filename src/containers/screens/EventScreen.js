import {
    isAreaLoaded,
    isEventLoaded,
    isLocationLoaded,
    isOpenHouseLoaded,
	getEvent,
	getArea,
} from "../..reducers";
import EventDetailsScreen from "../../screens/EventDetailsScreen";
import {connect} from "react-redux";
import Loadable from "../../components/Loadable";

const mapStateToProps = (state, { event, building, area }) => ({
	building: getBuilding(state, building),
	event: getEvent(state, event),
    area: getArea(state, area),
    //isLoaded: isEventLoaded(state) && isLocationLoaded(state) && isAreaLoaded(state) && isOpenHousesLoaded(state),
});

export default connect(mapStateToProps)(Loadable(EventDetailsScreen));