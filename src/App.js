import { useEffect, useRef, useState } from "react";
import Background from "./components/Background";
import Fifth from "./components/screens/Fifth";
import First from "./components/screens/First";
import Fourth from "./components/screens/Fourth";
import Second from "./components/screens/Second";
import Sixth from "./components/screens/Sixth";

function App() {
  const [currentView, setCurrentView] = useState(1);
  const isSectionChanged = useRef(false);

  function handleViewChange(e) {
    if (isSectionChanged.current) return;

    isSectionChanged.current = true;

    if (e.deltaY > 0) {
      setCurrentView((prev) => {
        setTimeout(() => {
          isSectionChanged.current = false;
        }, 1000);

        if (prev < 6) {
          return prev + 1;
        }
        return prev;
      });
    }

    if (e.deltaY < 0) {
      setCurrentView((prev) => {
        setTimeout(() => {
          isSectionChanged.current = false;
        }, 1500);

        if (prev > 1) {
          return prev - 1;
        }
        return prev;
      });
    }
  }

  useEffect(() => {
    console.log("currentView", currentView);
  }, [currentView]);

  return (
    <div
      onWheel={handleViewChange}
      className="w-full h-screen relative overflow-hidden"
    >
      <Background />

      <First currentView={currentView} />
      <Second currentView={currentView} />
      <Fourth currentView={currentView} />
      <Fifth currentView={currentView} />
      <Sixth currentView={currentView} />
    </div>
  );
}

export default App;
