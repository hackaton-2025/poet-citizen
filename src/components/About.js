import { Link } from "react-router-dom";

const About = () => {
  return(
    <div className="page__container">
      <h1 style={{textAlign: "center", margin: 0, paddingTop: 200}}>Здесь будет страница с информацией о проекте</h1>
      <Link to="/" style={{fontSize: 30, margin: "0 auto", paddingBottom: 300}}>На главную</Link>
    </div>
  )
};

export default About;
