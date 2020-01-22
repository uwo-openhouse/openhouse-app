import {getOpenHouse, hasOpenHouse, isOpenHousesLoaded} from "../../reducers";
import Loadable from "../../components/Loadable";
import HomeScreen from "../../screens/HomeScreen";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    hasOpenHouse: hasOpenHouse(state),
    openHouse: getOpenHouse(state),
    isLoaded: isOpenHousesLoaded(state),
});


export default connect(mapStateToProps)(Loadable(HomeScreen));
