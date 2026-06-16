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

import Events from "@/components/sections/Events";

import Hero
from "@/components/sections/Hero";

import Opening
from "@/components/sections/Opening";

import Couple
from "@/components/sections/Couple";

import InvitationWrapper
from "./InvitationWrapper";

import { useEffect } from "react";

import Countdown
from "@/components/sections/Countdown";

import Rsvp
from "@/components/sections/Rsvp";

import Location
from "@/components/sections/Location";

import LoveStory
from "@/components/sections/LoveStory";

import Gallery
from "@/components/sections/Gallery";

import Wishes
from "@/components/sections/Wishes";

import Gift
from "@/components/sections/Gift";

import { ThemeProvider } from "@/theme/ThemeProvider";

import ThemeLayout
from "@/components/common/ThemeLayout";

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
  <ThemeProvider theme={data.theme}>

    <ThemeLayout>

      <main>

      {isLuxury ? (

  <>
    <Hero
groom={data.groom}
bride={data.bride}
coverImage={data.coverImage}
/>

<Opening />

<Couple data={data} />

<LoveStory stories={data.loveStory}
/>

    <Events data={data}/>

    <Gallery
  gallery={data.gallery}
/>

<Countdown
  targetDate={data.date}
/>

<Rsvp slug={slug} />

<Wishes
    slug={slug}
/>

<Location
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

    <Gift
    data={data}
/>
  </>

) : (

  <>
  <Hero
groom={data.groom}
bride={data.bride}
coverImage={data.coverImage}
/>

<Opening />

<Couple data={data} />

<LoveStory stories={data.loveStory}
/>

  <Events data={data}/>

 <Gallery
  gallery={data.gallery}
/>

<Countdown
  targetDate={data.date}
/>

<Rsvp slug={slug} />

<Wishes
    slug={slug}
/>

<Location
  mapsUrl={data.mapsUrl}
  akadPlace={data.akadPlace}
  resepsiPlace={data.resepsiPlace}
/>

<Gift
    data={data}
/>
</>

)}
    </main>
    </ThemeLayout>

</ThemeProvider>

 </InvitationWrapper>
  );
}