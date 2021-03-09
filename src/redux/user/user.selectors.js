import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurremtUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
