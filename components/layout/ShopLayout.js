import React from "react";
import Head from "next/head";
import { useCurrentUser, useOwnShop } from "@/hooks/index";
import ShopHeader from "../header/ShopHeader";

const ShopLayout = ({ children, shopName }) => {
  const [user] = useCurrentUser();
  const [shop] = useOwnShop(user?._id);

  return (
    <React.Fragment>
      <Head>
        <meta name="theme-color" content="#f8b735" />
      </Head>
      <ShopHeader
        shopName={shopName}
        isAuth={Object.keys(user || {}).length > 1 ? true : false}
        shop={shop}
      />
      {children}
    </React.Fragment>
  );
};

export default ShopLayout;
