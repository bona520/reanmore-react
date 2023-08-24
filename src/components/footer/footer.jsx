import styles from "./footer.module.css";
import facebook from "../../assets/icons/facebookme.svg";
import telegram from "../../assets/icons/telegramme.svg";
import youtube from "../../assets/icons/youtubeme.svg";
import email from "../../assets/icons/emailme.svg";
const Footer = () => {
  const { footer, footerLinks, copyRight } = styles;
  return (
    <footer className={footer}>
      <div className={footerLinks}>
        <a target="_blank" href={"https://t.me/reanmore"} rel="noreferrer">
          <img src={telegram} alt="Telegram" />
        </a>
        <a
          href={"https://www.facebook.com/hengmenghoykh"}
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook" />
        </a>

        <a target="_blank" href={"mailto:info@reanmore.email"} rel="noreferrer">
          <img src={email} alt="my email" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={"https://www.youtube.com/channel/UCicYATk4spqEtGFDiXWal3w"}
        >
          <img src={youtube} alt="Youtube" />
        </a>
      </div>
      <p className={copyRight}>
        &#169; Copyright {new Date().getFullYear()}
        <br />   All rights reserved by reanmore.com
      </p>
    </footer>
  );
};
export default Footer;
