import ThemeBackground from "@/components/common/ThemeBackground";

export default function ElegantGold({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#faf8f3] min-h-screen relative">

      <ThemeBackground/>

      {children}

    </div>
  );
}