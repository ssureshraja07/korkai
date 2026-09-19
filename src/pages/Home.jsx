import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen">

      <Navbar />

      <section className="relative min-h-screen">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/src/assets/images/banner.jpg')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="ml-[10%] max-w-xl">

            <h1 className="text-5xl font-extrabold leading-tight text-[#062b4c]">
              Trading Beyond
              <br />
              Borders
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#172f40]">
              Your Trusted Source for Premium Coir,
              <br />
              Spices, and More from Thoothukudi.
            </p>

            <button className="mt-7 rounded-md bg-[#c49a3d] px-6 py-3 font-semibold text-white transition hover:bg-[#a77e2d]">
              Browse Our Categories
            </button>

          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;