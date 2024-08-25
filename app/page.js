import Image from "next/image";
import seatingChart from "../public/seating-chart.png";

export default function Home() {
  return (
    <main>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">Secret Number Concert</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#overview" className="hover:text-gray-400">
                Overview
              </a>
            </li>
            <li>
              <a href="#seating" className="hover:text-gray-400">
                Seating Layout
              </a>
            </li>
            <li>
              <a href="#benefits" className="hover:text-gray-400">
                Fan Benefits
              </a>
            </li>
            <li>
              <a href="#tickets" className="hover:text-gray-400">
                Tickets
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-black py-6 mt-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Secret Number Concert
          </h1>
          <p className="mt-4 text-xl text-white">Experience the magic live!</p>
        </div>
      </header>

      {/* Overview Section */}
      <section id="overview" className="py-12 bg-background">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-6">Concert Overview</h2>
          <p className="text-lg leading-relaxed">
            Join us for an unforgettable night with Secret Number! Enjoy
            exclusive performances, interactive sessions, and create memories
            that will last a lifetime.
          </p>
        </div>
      </section>

      {/* Seating Layout Section */}
      <section id="seating" className="py-12 bg-gray-800">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-6 text-white">
            Seating Layout
          </h2>
          <div className="flex justify-center">
            <Image
              src={seatingChart}
              alt="Seating Layout"
              width={600}
              height={400}
              className="rounded-lg shadow-custom-dark"
            />
          </div>
        </div>
      </section>

      {/* Fan Benefits Section */}
      <section id="benefits" className="py-12 bg-background">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-semibold mb-6">Fan Benefits</h2>
          <ul className="text-lg leading-relaxed space-y-4">
            <li>🎤 Exclusive Meet & Greet Session</li>
            <li>🎁 Limited Edition Merchandise</li>
            <li>📸 Professional Photo Opportunities</li>
            <li>🎶 Early Access to Soundcheck</li>
          </ul>
        </div>
      </section>

      <section id="tickets" className="py-12 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Your Tickets Now!</h2>
          <a
            href="https://tiptip.id/event/eaa6add0-3daf-4683-81ed-44d9e60bb78a?&show_options=true"
            className="btn-primary"
          >
            Buy Tickets
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-6">
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Secret Number. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
