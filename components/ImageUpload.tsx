"use client";

import { useState } from "react";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import {
  storage,
} from "@/lib/firebase";

export default function ImageUpload({
  path,
  onUploaded,
}: {
  path: string;
  onUploaded: (
    url: string
  ) => void;
}) {

  const [loading, setLoading] =
    useState(false);

  const upload =
    async (
      file: File
    ) => {

      try {

        setLoading(true);

        const storageRef =
          ref(
            storage,
            path
          );

        await uploadBytes(
          storageRef,
          file
        );

        const url =
          await getDownloadURL(
            storageRef
          );

        onUploaded(url);

      } finally {

        setLoading(false);

      }
    };

  return (
    <input
      type="file"
      accept="image/*"
      disabled={loading}
      onChange={(e) => {

        const file =
          e.target.files?.[0];

        if (!file)
          return;

        upload(file);

      }}
    />
  );
}