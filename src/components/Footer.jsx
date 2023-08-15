import "src/styles/footer.css";
import { NavLink } from "react-router-dom";
import icon_linkedin from "src/asset/icon/socials/icon_linkedin.svg";
import icon_insta from "src/asset/icon/socials/icon_insta.svg";
import icon_fb from "src/asset/icon/socials/icon_fb.svg";
import icon_twitter from "src/asset/icon/socials/icon_twitter.svg";
import icon_whatsup from "src/asset/icon/socials/icon_whatsup.svg";
import icon_tiktok from "src/asset/icon/socials/icon_tiktok.svg";
import icon_youtube from "src/asset/icon/socials/icon_youtube.svg";

function Footer() {
  return (
    <footer className="horizontal-centering">
      <div className="link-socials">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <NavLink>
              <img src={icon_linkedin} alt="linked in link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_insta} alt="instagram link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_fb} alt="facebook link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_twitter} alt="twitter link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_whatsup} alt="whatsup link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_tiktok} alt="tiktok link" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={icon_youtube} alt="youtube link" />
            </NavLink>
          </li>
        </ul>
      </div>
      <ul className="legality">
        <li>
          <NavLink to="">Privacy Policy</NavLink>
        </li>
        <li className="separator">·</li>
        <li>
          <NavLink to="">Terms of Use</NavLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
