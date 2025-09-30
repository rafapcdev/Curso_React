function App() {
  return (
    <div className="font-sans bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-white">
      
      <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  shadow-md p-6 flex justify-between items-center">
        <img src="/react.svg" alt="React" />
        <ul className="hidden sm:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#home" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#sobre" className="hover:text-blue-600 transition">Sobre</a></li>
          <li><a href="#contato" className="hover:text-blue-600 transition">Contato</a></li>
        </ul>
      </nav>

      
      <section className="p-6 sm:p-10 md:p-16 lg:p-20 text-center bg-gradient-to-r from-gray-300 via-gray-500 to-black-500 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Bem-vindo à nossa plataforma
        </h1>
        <p className="text-gray-800 text-lg sm:text-xl mb-6">
          Soluções modernas para transformar sua presença digital.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Comece agora
        </button>
      </section>
    </div>
  );
}

export default App;
