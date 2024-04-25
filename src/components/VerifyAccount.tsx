"use client";
import React, { useEffect, useState } from "react";

const VerifyAccount = () => {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const accountToken = queryParams.get("token");
    const type = queryParams.get("type");
    const redirectTo = queryParams.get("redirect_to");

    if (!accountToken || !type || !redirectTo) {
      setIsError(true);
    } else {
      const accountVerificationURL = `${
        process.env.NEXT_PUBLIC_SUPABASE_API_URL
      }/auth/v1/verify?token=${accountToken}&type=${type}&redirect_to=${`${redirectTo}?token=${accountToken}`}`;
      window.open(accountVerificationURL, "_self");
    }
  }, []);

  return (
    <div
      style={{
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isError ? (
        <h2>Error redirecting to Journa application</h2>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VerifyAccount;
