import { MOCKED_TOKEN_KEY } from "@/constants";

export const useAuth = () => {
    //getting token from local storage
    const token = localStorage.getItem(MOCKED_TOKEN_KEY)
    //checking whether token is preset or not
    //returning the token
    return token ;
};