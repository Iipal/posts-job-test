import { LOADER_SHOW, LOADER_HIDE, ALERT_SHOW, ALERT_HIDE } from "./types";
import { AppReducerProps, ReducerActionProps } from "../interfaces/ReducersState";

const initState: AppReducerProps = {
  loading: false,
  alert: null,
};

export function appReducer(
  state: AppReducerProps = initState,
  action: ReducerActionProps
): AppReducerProps {
  switch (action.type) {
    case LOADER_SHOW:
      return { ...state, loading: true };
    case LOADER_HIDE:
      return { ...state, loading: false };
    case ALERT_SHOW:
      return { ...state, alert: action.payload };
    case ALERT_HIDE:
      return { ...state, alert: null };
    default:
      return state;
  }
}
