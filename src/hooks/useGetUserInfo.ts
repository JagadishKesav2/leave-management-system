import { useQuery } from "@tanstack/react-query";
import { decodeMockJwt } from "@/utils";
import adminJson from "@/data/admin.json";
import { UserT } from "@/types";
import { MOCKED_TOKEN_KEY } from "@/constants";

const getUserInfo = () => {
  const token = localStorage.getItem(MOCKED_TOKEN_KEY);
  if (!token) return;
  return new Promise<UserT>((resolve, reject) => {
    setTimeout(() => {
      const decodedData = decodeMockJwt(token);
      if (!decodedData) {
        reject("Invalid User !!");
        return;
      }

      const userInfo = adminJson.find(
        (admin: UserT) => admin.email === decodedData.email
      );

      if (!userInfo) {
        reject("No user found !!");
        return;
      }

      resolve(userInfo);
    }, 500);
  });
};

export const useGetUserInfo = () =>
  useQuery({
    queryKey: ["user_info"],
    queryFn: getUserInfo,
  });
