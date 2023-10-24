import { SagaActionTypes } from "../SagaActionTypes";

export const getBuildings = () => {
  return { type: SagaActionTypes.GET_BUILDINGS };
};

export const getBook = () => {
  return { type: SagaActionTypes.GET_BOOK };
};
