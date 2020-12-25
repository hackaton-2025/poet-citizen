const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content page__narrow">
        {props.children}
      </div>
    </footer>
  );
};

export default Footer;
