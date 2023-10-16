import { SagaActionTypes } from "../SagaActionTypes";

export const getRoutes = () => {
  return { type: SagaActionTypes.GET_ROUTES };
};
