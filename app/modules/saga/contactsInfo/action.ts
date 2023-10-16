import { SagaActionTypes } from "../SagaActionTypes";

export const getContactsInfo = () => {
  return { type: SagaActionTypes.GET_CONTACTS_INFO };
};

export const getAboutInfo = () => {
  return { type: SagaActionTypes.GET_APP_ABOUT };
};
