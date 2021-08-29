import { useEffect } from "react";
import { connect } from "react-redux";

import { getDisputesRequest } from "../../redux/actions";

import Disputes from "../../components/Profile/Disputes";


const DisputesContainer = ({match, user, locale, disputes, onGetDisputesRequest}) => {

    useEffect(() => {
        onGetDisputesRequest(user.id);
    }, [onGetDisputesRequest, user.id]);

    return (
        <Disputes
            disputes={disputes}
        />
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    locale: state.locale,
    disputes: state.disputes,
});

const mapDispatchToProps = (dispatch) => ({
    onGetDisputesRequest: (userId) => dispatch(getDisputesRequest(userId))
});


export default connect(mapStateToProps, mapDispatchToProps)(DisputesContainer);

