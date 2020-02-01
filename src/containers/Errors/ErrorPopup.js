import {getErrors, hasErrors} from "../../reducers";
import {bindActionCreators} from "redux";
import {hideErrors} from "../../actions/errors";
import {connect} from "react-redux";
import ErrorPopup from "../../components/Errors/ErrorPopup";


const mapStateToProps = (state) => ({
    errors: getErrors(state).filter(error => error.isVisible),
    hasErrors: hasErrors(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onDismiss: hideErrors,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup);
