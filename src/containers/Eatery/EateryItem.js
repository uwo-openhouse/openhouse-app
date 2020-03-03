import {getLocation} from "../../reducers";
import EateryItem from "../../components/Eatery/EateryItem";
import {connect} from "react-redux";


const mapStateToProps = (state, { building }) => ({
    building: getLocation(state, building),
});

export default connect(mapStateToProps)(EateryItem);
