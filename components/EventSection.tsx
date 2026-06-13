export default function EventSection({
  title,
  date,
  time,
  place,
}: {
  title: string;
  date: string;
  time: string;
  place: string;
}) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-10 max-w-xl mx-auto border border-[#E8DFCF]">
      <h3 className="text-3xl font-serif mb-6 gold-text">
        {title}
      </h3>

      <div className="space-y-3 text-gray-700">
        <p>{date}</p>
        <p>{time}</p>
        <p>{place}</p>
      </div>
    </div>
  );
}