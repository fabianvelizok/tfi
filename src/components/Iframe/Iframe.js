import cx from "classnames";

import './Iframe.css';

function Iframe(props) {
  const { className, src } = props;

  const classes = cx(['iframe', className]);

  return (
    <iframe
      className={classes}
      src={src}
      frameborder="0"
      allowfullscreen
      />
  );
};

Iframe.defaultProps = {
  className: undefined
}

export default Iframe;
