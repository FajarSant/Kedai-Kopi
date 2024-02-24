import React from 'react';
import Link from 'next/link';
import { authUserSession } from "../../libs/auth-libs";

const UserActionsButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? ` ${user.name}` : "Sign In";
  const actionUrl = user ? "/api/auth/signout" : "/signin";

  return (
    <div>
      <Link href={actionUrl} className=' text-base md:text-xl lg:text-3xl xl:text-3xl'>{actionLabel}</Link>
    </div>
  );
};

export default UserActionsButton;
