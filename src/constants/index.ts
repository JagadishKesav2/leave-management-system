import { DASHBOARD, LEAVE_REQUESTS, LEAVE_REQ_FORM } from "./routes";

export const MOCKED_TOKEN_KEY = "mocked_token";

const SIDE_BAR_DASHBOARD = { text: "Dashboard", path: DASHBOARD };
const SIDE_BAR_LEAVE_REQ_FORM = { text: "Leave Request Form", path: LEAVE_REQ_FORM };
const SIDE_BAR_LEAVE_REQ = { text: "Leave Requests", path: LEAVE_REQUESTS };

export const ADMIN_SIDE_BAR = [SIDE_BAR_DASHBOARD, SIDE_BAR_LEAVE_REQ_FORM, SIDE_BAR_LEAVE_REQ];

export const EMP_SIDE_BAR = [SIDE_BAR_LEAVE_REQ_FORM, SIDE_BAR_LEAVE_REQ];
