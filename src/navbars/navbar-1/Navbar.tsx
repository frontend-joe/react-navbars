import "./styles.css";
import logo from "./logo.svg";
import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <>
      <nav className={`${isNavbarVisible ? "visible" : ""}`}>
        <img src={logo} />
        <div className="nav-items">
          <a href="#">Portfolio</a>
          <a href="#">Skills</a>
          <a href="#">About</a>
        </div>
      </nav>
      <section>
        <div>
          <h2>Portfolio</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image3} />
      </section>
      <section className="shaded">
        <img src={image1} />
        <div>
          <h2>Skills</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image2} />
      </section>
      <section className="shaded">
        <img src={image3} />
        <div>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image2} />
      </section>
      <section className="shaded">
        <img src={image3} />
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2>My Skills</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
            itaque corporis optio unde quia, modi pariatur ea magni dolorum?
          </p>
        </div>
        <img src={image1} />
      </section>
    </>
  );
};
