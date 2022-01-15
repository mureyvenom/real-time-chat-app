import { createSelector } from "reselect";

interface userState {
  user: {
    userDetails: {
      name: string;
      _id: string;
      profileImage: string;
      status: string;
    };
    friends: object[];
  };
}

export const selectUser = (state: userState) => state.user;

export const selectUserDetails = createSelector(
  [selectUser],
  (user) => user.userDetails
);

export const selectFriends = createSelector(
  [selectUser],
  (user) => user.friends
);

// export const selectStatus = createSelector(
//   [selectUser],
//   (user) => user.userDetails.status
// );
