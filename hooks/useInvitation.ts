"use client";

import {
  useEffect,
  useState,
} from "react";

export default function useInvitation(
  slug: string
) {

  const [data, setData] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      `/api/invitation/${slug}`
    )
      .then((res) =>
        res.json()
      )
      .then((json) => {

        setData(json);

        setLoading(false);
      });

  }, [slug]);

  return {
    data,
    loading,
  };
}