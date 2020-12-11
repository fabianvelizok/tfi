import cx from "classnames";

import './Home.css';

function Home(props) {
  const { className } = props;

  const classes = cx(['stage', className]);

  return (
    <div className={classes} >
      <h2>Bienvenido</h2>
    </div>
  );
};

Home.defaultProps = {
  className: undefined
}

export default Home;
