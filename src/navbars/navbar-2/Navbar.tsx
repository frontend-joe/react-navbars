import { useEffect, useState } from "react";
import "./styles.css";

const navItems = ["home", "settings", "lock"];

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const { pageYOffset, innerHeight } = window;

    const currentIndex = Math.floor(pageYOffset / (innerHeight - 200));

    if (currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <aside>
        <nav>
          <span
            className="background"
            style={{
              translate: activeIndex > 0 ? `0 ${activeIndex * 100}%` : 0,
            }}
          />
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`}>
              <span className="material-symbols-outlined">{item}</span>
            </a>
          ))}
        </nav>
      </aside>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            doloribus labore totam quis aut, nulla, et facere voluptatibus
            architecto nostrum, odio corporis quae quibusdam molestiae numquam
            ratione omnis. Doloribus, voluptates.
          </p>
        </section>
        <section id="settings">
          <h2>Settings</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            doloribus labore totam quis aut, nulla, et facere voluptatibus
            architecto nostrum, odio corporis quae quibusdam molestiae numquam
            ratione omnis. Doloribus, voluptates.
          </p>
        </section>
        <section id="lock">
          <h2>Account</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            doloribus labore totam quis aut, nulla, et facere voluptatibus
            architecto nostrum, odio corporis quae quibusdam molestiae numquam
            ratione omnis. Doloribus, voluptates.
          </p>
        </section>
      </main>
    </>
  );
};
