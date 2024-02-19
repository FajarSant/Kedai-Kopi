// File: /src/app/libs/auth-libs.js
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/options";

export const authUserSession = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
