import Header from "./components/Header";
import GameCard from "./components/GameCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <GameCard
        title="Minecraft"
        genre="Sandbox"
        platform="PC"
      />

      <GameCard
        title="GTA V"
        genre="Action"
        platform="PC / PS5"
      />

      <GameCard
        title="CS2"
        genre="Shooter"
        platform="PC"
      />

      <Footer />
    </div>
  );
}

export default App;