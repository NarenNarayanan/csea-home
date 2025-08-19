import logo from "../assets/logo.png"; // since Home.jsx is in components/

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 mt-16">
      {/* Add top padding to avoid overlap */}
      <div className="pt-32">
        <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-md">
          Welcome to CSEA
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Empowering students in Computer Science through knowledge, innovation,
          and collaboration.
        </p>

        {/* Logo BELOW the text */}
        <img
          src={logo}
          alt="CSEA Logo"
          className="mt-8 w-48 h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
