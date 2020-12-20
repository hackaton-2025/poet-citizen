const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="page__narrow">
        {props.children}
      </div>
    </footer>
  );
};

export default Footer;
