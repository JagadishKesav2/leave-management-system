import { useQuery } from "@tanstack/react-query";
import leavesJson from "@/data/leaves.json";
import { LeaveRequestT } from "@/types";

const getLeavesInfo = () => {
  return new Promise<LeaveRequestT[]>((resolve) => {
    setTimeout(() => {
      const data = leavesJson as LeaveRequestT[]
      resolve(data);
    }, 500);
  });
};

export const useGetLeavesInfo= () =>
  useQuery({
    queryKey: ["leaves_info"],
    queryFn: getLeavesInfo,
  });
