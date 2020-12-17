import cx from "classnames";

import './Home.css';

function Home(props) {
  const { className } = props;

  const classes = cx(['home', className]);

  return (
    <div className={classes}>

      <div className="home__headings">
        <h2 className="home__center">Trabajo Final Integrador</h2>

        <h3 className="home__center">Proceso de Control de Pedido</h3>
        <h3 className="home__center">Droguería Suiza</h3>
      </div>

      <div className="home__inline">
        <h4 className="home__subsection">Docentes:&nbsp;</h4>
        <span>Ing. Liliana del Prado e Ing. Silvana Marsiglia</span>
      </div>
      <div className="home__inline">
        <h4 className="home__subsection">Materia:&nbsp;</h4>
        <span>Análisis de Sistemas</span>
      </div>
      <div className="home__inline">
        <h4 className="home__subsection">Comisión:&nbsp;</h4>
        <span>2K6</span>
      </div>
      <div className="home__inline">
        <h4 className="home__subsection">Año:&nbsp;</h4>
        <span>2020</span>
      </div>

      <div>
        <h4 className="home__subsection">Integrantes:</h4>
        <ul>
          <li className="home__list-item">Ballatore Jonathan Jorge. Leg.: 41052</li>
          <li className="home__list-item">Castillo Pablo Sebastián. Leg.: 46394</li>
          <li className="home__list-item">Ruiz Aguilar Lucas. Leg.: 50022</li>
          <li className="home__list-item">Veliz Fabián Horacio. Leg.: 41149</li>
        </ul>
      </div>
    </div>
  );
};

Home.defaultProps = {
  className: undefined
}

export default Home;
