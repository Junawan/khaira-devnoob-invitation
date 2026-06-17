"use client";

import { Icon } from "@iconify/react";
import { navigation } from "@/config/navigation";
import { useTheme } from "@/theme/ThemeProvider";

type BottomNavigationProps = {
  isPlaying: boolean;
  onToggleMusic: () => void;
};

export default function BottomNavigation({
  isPlaying,
  onToggleMusic,
}: BottomNavigationProps) {

  const theme = useTheme();

  const scrollTo = (id: string) => {

    document
      .getElementById(id)
      ?.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

  };

  return (

    <div
      className="
      fixed
      bottom-6
      left-1/2
      -translate-x-1/2
      z-50
      "
    >

      <div
        className={`
        flex
        items-center
        gap-2
        rounded-full
        px-3
        py-2
        backdrop-blur-xl
        border
        ${theme.bottomNav.background}
        ${theme.bottomNav.border}
        ${theme.bottomNav.shadow}
        `}
      >

        {navigation.map((item) => (

  <button

    key={item.id}

    onClick={() => scrollTo(item.id)}

    className="
    w-11
    h-11
    rounded-full
    flex
    items-center
    justify-center
    transition
    duration-300
    "

  >

    <Icon
      icon={item.icon}
      width={22}
      className={theme.bottomNav.icon}
    />

  </button>

))}

{/* Music */}
<button

  onClick={onToggleMusic}

  className="
  w-11
  h-11
  rounded-full
  flex
  items-center
  justify-center
  transition
  duration-300
  "

>

  <Icon

    icon={
      isPlaying
        ? "ph:music-notes-fill"
        : "ph:music-notes"
    }

    width={22}

    className={theme.bottomNav.icon}

  />

</button>

      </div>

    </div>

  );

}