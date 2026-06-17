"use client";

export default function MusicButton({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="fixed 
      bottom-28
left-5
z-[100]
      bg-[#9A7B45] 
      text-white 
      rounded-full 
      w-14 h-14 flex 
      items-center 
      justify-center 
      shadow-lg"
    >
      {isPlaying ? "🔊" : "🔇"}
    </button>
  );
}