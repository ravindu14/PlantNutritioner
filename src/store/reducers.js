// @flow
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import auth, { type AuthStateType } from "reducers/auth";
import deficiency, { type DeficiencyStateType } from "reducers/deficiency";
import product, { type ProductStateType } from "reducers/product";

export type ApplicationState = {
  auth: AuthStateType,
  deficiency: DeficiencyStateType,
  product: ProductStateType,
};

export default (history: History) =>
  combineReducers({
    auth,
    deficiency,
    product,
    router: connectRouter(history),
  });
