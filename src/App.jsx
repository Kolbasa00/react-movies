import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import Main from "./layout/Main.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen gap-10">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
