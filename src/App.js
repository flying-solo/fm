import "./App.css";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

function App() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="app">
        <div className="div1"> initial div 1</div>
        <div className="div2">
          <div className="finaldiv2">
            medium div 2
          </div>
          <div className="behind" ref={ref}>behind</div>
        </div>
        {/* <div className="finalDiv">final Div</div> */}
      </div>
    </>
  );
}

export default App;
