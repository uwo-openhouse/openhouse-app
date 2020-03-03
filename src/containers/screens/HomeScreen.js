import {
    getOpenHouse, hasOpenHouse, isLoading, isOpenHousesLoaded
} from "../../reducers";
import Loadable from "../../components/Loadable";
import HomeScreen from "../../screens/HomeScreen";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getAll} from "../../actions";

const mapStateToProps = state => ({
    hasOpenHouse: hasOpenHouse(state),
    openHouse: getOpenHouse(state),
    isLoaded: isOpenHousesLoaded(state),
    refreshing: isLoading(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onRefresh: getAll,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Loadable(HomeScreen));
