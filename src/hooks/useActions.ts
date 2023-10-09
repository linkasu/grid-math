import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as controllActions from "../store/actions/controllActions";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(controllActions, dispatch);
};
