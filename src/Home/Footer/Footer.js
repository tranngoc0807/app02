import { showFB, showInstagram, showTwitter } from "../../utils/common";
import "../Footer/Footer.css";
export function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="sub-footer-body">
          <div className="title-top-footer">EXPLORE</div>
          <div className="logo-footer-brand">
            <div  className="logo-footer-brand-sub">
              <div className="face-logo">{showFB()}</div>
              <div className="face-twitter">
                <div>{showTwitter()}</div>
              </div>
              <div className="face-instagram">{showInstagram()}</div>
            </div>
          </div>
          <div className="title-bot-footer">
            2018 EXPLORE.ALL RIGHTS RESEVERD.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
