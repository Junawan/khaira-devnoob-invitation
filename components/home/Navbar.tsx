export default function Navbar() {

  return (

    <header
      className="
      sticky
      top-0
      z-50
      bg-white/90
      backdrop-blur
      border-b
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        h-16
        px-6
        flex
        items-center
        justify-between
        "
      >

        <h1
          className="
          text-2xl
          font-bold
          font-serif
          "
        >
          Khaira Invitation
        </h1>

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          <a href="#">
            Template
          </a>

          <a href="#">
            Harga
          </a>

          <a href="#">
            FAQ
          </a>

        </nav>

        <div
          className="
          flex
          gap-3
          "
        >

          <a
            href="/login"
            className="
            px-4
            py-2
            rounded-lg
            border
            "
          >
            Login
          </a>

          <a
            href="/register"
            className="
            px-4
            py-2
            rounded-lg
            bg-black
            text-white
            "
          >
            Daftar
          </a>

        </div>

      </div>

    </header>

  );

}