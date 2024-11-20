import React, { useEffect } from "react";
import { SCREENS } from "@shared-constants";
import HomeScreen from "views/home/HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store/Store";
import { IApiResponse } from "models/IApiResponse";
import { User } from "models/UserModel";
import { setAllUsers } from "redux/actions/AccountAction";
import { navigate } from "@navigation";
import { getUserDetail } from "@controllers";

const HomeScreenViewModel = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.userAccount);

  useEffect(() => {
    const getUserData = async () => {
      const res: IApiResponse<User> = await getUserDetail();
      if (res.isSuccess) dispatch(setAllUsers(res?.data?.data));
    };
    getUserData();
  }, [dispatch]);

  const handleItemPress = () => {
    navigate(SCREENS.DETAIL);
  };
  return (
    <>
      <HomeScreen
        {...{
          handleItemPress,
          userData,
        }}
      />
    </>
  );
};

export default HomeScreenViewModel;
