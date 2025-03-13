import { useMutation } from "@tanstack/react-query";
import adminJson from "@/data/admin.json";
import { generateMockJwt } from "@/utils";
import { LoginSchemaProps } from "./Authentication.schema";
import { UserT } from "@/types";

const mockLogin = async (data: LoginSchemaProps) => {
  return new Promise<{ token: string }>((resolve, reject) => {
    setTimeout(() => {
      const adminData = adminJson.find(
        (admin: UserT) =>
          admin.email === data.email && admin.password === data.password
      );
      if (!adminData) {
        reject({ message: "Invalid email or password" });
        return;
      }

      resolve({ token: generateMockJwt(adminData.email) });
    }, 1000);
  });
};

export const useAuthentication = () =>
  useMutation({
    mutationFn: mockLogin,
  });
