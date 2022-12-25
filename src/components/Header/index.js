import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = React.useMemo(() => {
    return window.innerWidth <= 768;
  }, [window.innerWidth]);
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  const onClickToggleMenu = () => setIsMenuOpened((prev) => !prev)

  return (
    <section className="header">
      <img src={Logo} alt="" className="logo" />
      {!isMenuOpened && mobile ? (
        <div
          style={{
            backgroundColor: "var(--appColor",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={onClickToggleMenu}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              activeClass="active"
              onClick={onClickToggleMenu}
              to="hero"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickToggleMenu}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickToggleMenu}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickToggleMenu}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={onClickToggleMenu}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Header;
