"use client";

import useInvitation from "@/hooks/useInvitation";

import {
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

import {
  db,
} from "@/lib/firebase";

import LuxuryBlack
from "./themes/LuxuryBlack";

import ElegantGold
from "./themes/ElegantGold";

import ElegantGoldEvents
from "./themes/ElegantGold/Events";

import LuxuryBlackHero
from "./themes/LuxuryBlack/Hero";

import LuxuryBlackOpening
from "./themes/LuxuryBlack/Opening";

import LuxuryBlackEvents
from "./themes/LuxuryBlack/Events";

import LuxuryBlackGift
from "./themes/LuxuryBlack/Gift";

import LuxuryBlackGallery
from "./themes/LuxuryBlack/Gallery";

import InvitationWrapper
from "./InvitationWrapper";

import { useEffect } from "react";

import LuxuryBlackCouple
from "./themes/LuxuryBlack/Couple";

import LuxuryBlackCountdown
from "./themes/LuxuryBlack/Countdown";

import LuxuryBlackRsvp
from "./themes/LuxuryBlack/Rsvp";

import LuxuryBlackWishes
from "./themes/LuxuryBlack/Wishes";

import LuxuryBlackLocation
from "./themes/LuxuryBlack/Location";

import LuxuryBlackLoveStory
from "./themes/LuxuryBlack/LoveStory";

import ElegantGoldCouple
from "./themes/ElegantGold/Couple";

import ElegantGoldHero
from "./themes/ElegantGold/Hero";

import ElegantGoldOpening
from "./themes/ElegantGold/Opening";

import ElegantGoldLoveStory
from "./themes/ElegantGold/LoveStory";

import ElegantGoldGallery
from "./themes/ElegantGold/Gallery";

import ElegantGoldCountdown
from "./themes/ElegantGold/Countdown";

import ElegantGoldRsvp
from "./themes/ElegantGold/Rsvp";

import ElegantGoldWishes
from "./themes/ElegantGold/Wishes";

import ElegantGoldLocation
from "./themes/ElegantGold/Location";

import ElegantGoldGift
from "./themes/ElegantGold/Gift";

import AudioPlayer
from "./AudioPlayer";

export default function InvitationClient({
  slug,
  guestName,
}: {
  slug: string;
  guestName?: string;
}) {
  console.log(
  "GUEST NAME:",
  guestName
);

  const {
    data,
    loading,
  } = useInvitation(slug);

  useEffect(() => {

  const key =
    `viewed-${slug}`;

  const viewed =
    localStorage.getItem(
      key
    );

  if (viewed)
    return;

  const addView =
    async () => {

      await updateDoc(
        doc(
          db,
          "invitations",
          slug
        ),
        {
          views:
            increment(1),
        }
      );

      localStorage.setItem(
        key,
        "true"
      );
    };

  addView();

}, [slug]);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-10">
        Undangan tidak ditemukan
      </div>
    );
  }

  const ThemeWrapper =
  data.theme ===
  "luxury-black"
    ? LuxuryBlack
    : ElegantGold;

    const isLuxury =
  data.theme === "luxury-black";

  console.log("DATA INVITATION:", data);

  return (

  <InvitationWrapper
  groom={data.groom}
  bride={data.bride}
  guestName={guestName || ""}
  coverImage={data.coverImage}
  theme={data.theme}
  musicUrl={data.musicUrl}
>

    <ThemeWrapper>

      <main>

      {isLuxury ? (

  <>
    <LuxuryBlackHero
  groom={data.groom}
  bride={data.bride}
  coverImage={data.coverImage}
/>

<LuxuryBlackOpening />

<LuxuryBlackCouple
  data={data}
/>

<LuxuryBlackLoveStory
  stories={data.loveStory}
/>

    <LuxuryBlackEvents
      data={data}
    />

    <LuxuryBlackGallery
  gallery={data.gallery}
/>

<LuxuryBlackCountdown
  targetDate={data.date}
/>

<LuxuryBlackRsvp
  slug={slug}
/>

<LuxuryBlackWishes
  slug={slug}
/>

<LuxuryBlackLocation
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

    <LuxuryBlackGift
      data={data}
    />
  </>

) : (

  <>
  <ElegantGoldHero
    groom={data.groom}
    bride={data.bride}
    coverImage={data.coverImage}
  />

  <ElegantGoldOpening />

  <ElegantGoldCouple
    data={data}
  />

  <ElegantGoldLoveStory
  stories={data.loveStory}
/>

  <ElegantGoldEvents
    data={data}
  />

  <ElegantGoldGallery
  gallery={data.gallery}
/>

<ElegantGoldCountdown
  targetDate={data.date}
/>

<ElegantGoldRsvp
  slug={slug}
/>

<ElegantGoldWishes
  slug={slug}
/>

<ElegantGoldLocation
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

<ElegantGoldGift
      data={data}
    />
</>

)}
    </main>

</ThemeWrapper>

 </InvitationWrapper>
  );
}