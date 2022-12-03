import { useEffect } from "react";
import { useRef } from "react";
import "./App.css";

function App() {
  const app = useRef(null);
  useEffect(() => {
    const scroller = app.current.addEventListener("wheel", (e) => {
      console.log(app.current.scrollLeft);
      if (e.deltaY >= 0 && app.current.getBoundingClientRect().top === 0) {
        app.current.scrollLeft += e.deltaY;
      } else if (e.deltaY < 0 && app.current.scrollLeft !== 0) {
        e.preventDefault();
        app.current.scrollLeft += e.deltaY;
      }
    });

    return () => {
      app.current.removeEventListener("wheel", scroller);
    };
  }, [app.current]);

  return (
    <div className="App">
      <div className="div1">
        Div Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        delectus nihil eum consequuntur corrupti, quasi nesciunt corporis enim
        nostrum expedita possimus saepe laborum repellat magnam dolorum,
        necessitatibus porro quos perspiciatis culpa molestiae voluptatibus illo
        voluptas harum numquam! Ipsum laborum autem aut? Laborum dolores
        molestiae cumque enim, delectus reprehenderit qui laboriosam.
      </div>
      <div className="div2" ref={app}>
        <div className="div21">Div 1</div>
        <div className="div22">Div 2</div>
      </div>
    </div>
  );
}

export default App;
