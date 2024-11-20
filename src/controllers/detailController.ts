import APIConstants from "core/ApiConstants";
import { User } from "models/UserModel";
import { sendGetRequest } from "services/network/Network";
import LocalString from "shared/localization/localEnums";

export const getUserDetail = async () => {
  try {
    const response = await sendGetRequest<User>(APIConstants.GetUser);
    if (response.isSuccess) {
      return response;
    } else return response.errors;
  } catch (e) {
    return LocalString.serverError;
  }
};
