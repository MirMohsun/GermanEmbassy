import { SagaActionTypes } from "../SagaActionTypes";

export const getBuildings = () => {
  return { type: SagaActionTypes.GET_BUILDINGS };
};
