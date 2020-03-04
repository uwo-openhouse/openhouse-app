import {getArea, getLocation, eventIsInPlanner} from "../../reducers";
import ScheduleItem from "../../components/Schedule/ScheduleItem";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addToPlanner, removeFromPlanner} from "../../actions/planner";

const mapStateToProps = (state, { building, area, uuid }) => ({
    building: getLocation(state, building),
    area: getArea(state, area),
    isInPlanner: eventIsInPlanner(state, uuid),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addToPlanner,
    removeFromPlanner,
}, dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(ScheduleItem);
