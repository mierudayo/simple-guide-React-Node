"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import Item from "./items";

export const List = () => {
  const { userMemberships } = useOrganization({
    userMemberships: {
      Infinite: true,
    },
  });

  if(!userMemberships.data?.length) reutrn null;
};
