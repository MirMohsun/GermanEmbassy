import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {AppStateActions} from "../../modules/redux/appStateSlice";
import {UserInfoActions} from "../../modules/redux/userInfoSlice";
import {AuthStateActions} from "../../modules/redux/authStateSlice";

const allActions = {
    ...AppStateActions,
    ...AuthStateActions,
    ...UserInfoActions
};

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
