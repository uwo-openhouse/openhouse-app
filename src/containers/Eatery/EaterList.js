
import {bindActionCreators} from "redux";
import {getAll} from "../../actions";
import {connect} from "react-redux";
import EateryList from "../../components/Eatery/EateryList";
import {isLoading} from "../../reducers";

const mapStateToProps = state => ({
    refreshing: isLoading(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onRefresh: getAll,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(EateryList);
