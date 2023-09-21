import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { AppStateActions } from "../modules/redux/appStateSlice";

const allActions = {
    ...AppStateActions
};

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(allActions, dispatch);
};
