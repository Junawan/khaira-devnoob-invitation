"use client";

export default function InvitationDashboard({
  slug,
}: {
  slug: string;
}) {

  return (

    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-10">
        {slug}
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white rounded-3xl shadow p-8">

          <h2 className="text-xl font-semibold">
            RSVP Masuk
          </h2>

          <p className="text-5xl font-bold mt-4">
            0
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow p-8">

          <h2 className="text-xl font-semibold">
            Ucapan Masuk
          </h2>

          <p className="text-5xl font-bold mt-4">
            0
          </p>

        </div>

      </div>

    </div>

  );
}