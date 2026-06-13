export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-stone-100">
      <div className="text-center">
        <h1 className="text-5xl font-serif mb-4">
          Khaira Invitation
        </h1>

        <p className="text-gray-600 mb-6">
          Undangan Digital Premium
        </p>

        <a
          href="/invite/budi-siti"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Lihat Demo
        </a>
      </div>
    </main>
  );
}