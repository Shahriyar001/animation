import Lesson3 from "./pages/Lesson3";
import Lesson4 from "./pages/Lesson4";
import Lesson1 from "./pages/lesson1";

function App() {
  return (
    <div className="flex h-screen justify-center gap-5 items-center">
      <Lesson1 />
      <Lesson3 />
      <Lesson4 />
    </div>
  );
}

export default App;
