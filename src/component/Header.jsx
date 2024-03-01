import '../style/Header.css';
import Image from "./Image.jsx";
import foto_1 from '/src/assets/img/2345.jpg';


export default function Header() {
  return (
    <div className="header" id='header'>
      <div className="col-md-7">
        <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div className="col-md-5">
        <img className='header-img' src={Image.imagePhotoTwo} alt="Header" />
        <img className='header-img' src={foto_1} alt="Header" />
      </div>
    </div>
  )
}