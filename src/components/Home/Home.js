import cx from "classnames";

import './Home.css';

function Home(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      Bienvenido
    </div>
  );
};

Home.defaultProps = {
  className: undefined
}

export default Home;
