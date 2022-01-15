import { UserActionTypes } from "./user.types";

export interface userObjectType {
  name: string;
  _id: string;
  profileImage: string;
  status: string;
}

export const setUser = (user: userObjectType) => ({
  type: UserActionTypes.SET_USER,
  payload: user,
});

export const setUserProfileImage = (image: string) => ({
  type: UserActionTypes.SET_PROFILE_STATUS,
  payload: image,
});

export const setUserStatus = (status: string) => ({
  type: UserActionTypes.SET_PROFILE_STATUS,
  payload: status,
});

export const clearUser = () => ({
  type: UserActionTypes.CLEAR_USER,
});
