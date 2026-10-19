
import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import ScamChecker from "./ScamChecker";
import SafetyTips from "./SafetyTips";
import Footer from "./Footer";

function App() {
  return (
    <div className="prooflens-app">
      <Navbar />
      <main>
        <Hero />
        <ScamChecker />
        <SafetyTips />
      </main>
      <Footer />
    </div>
  );
}

export default App;
