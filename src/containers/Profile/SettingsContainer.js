import { useEffect } from "react";
import { connect } from "react-redux";

import { getProfileRequest } from "../../redux/actions";

import Settings from "../../components/Profile/Settings";


const SettingsContainer = ({user, profile, onGetProfileRequest}) => {

    useEffect(() => {
        onGetProfileRequest([user.id, user.role]);
    }, [user.id, onGetProfileRequest, user.role]);

    return (
        <Settings
            profile={profile}
            userRole={user.role}
        />
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    profile: state.profile,
});

const mapDispatchToProps = (dispatch) => ({
    onGetProfileRequest: (supplierId) => dispatch(getProfileRequest(supplierId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
