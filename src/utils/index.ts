import { JWTPayload } from "@/types";

export const generateMockJwt = (email: string) => {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload: JWTPayload = {
    email,
    iat: Math.floor(Date.now() / 1000), // Issued At
    exp: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour
  };

  const base64Encode = (obj: object) =>
    btoa(JSON.stringify(obj))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");

  return `${base64Encode(header)}.${base64Encode(payload)}`;
};

export const decodeMockJwt = (token: string): JWTPayload | null => {
  try {
    const [, payload] = token.split("."); // Extract the payload part
    const decodedPayload = JSON.parse(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
    );
    return decodedPayload;
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};
