import {getArea, getLocation} from "../../reducers";
import ScheduleItem from "../../components/Schedule/ScheduleItem";
import {connect} from "react-redux";


const mapStateToProps = (state, { building, area }) => ({
    building: getLocation(state, building),
    areaColor: getArea(state, area).color,
});

export default connect(mapStateToProps)(ScheduleItem);
