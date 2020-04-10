export * as constants from "./constants";
export * from "./initialState";

export const createAction = (type: any, ...args: any) => {
  return Object.assign({}, { type }, ...args);
};
