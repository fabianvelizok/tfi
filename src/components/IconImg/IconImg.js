import cx from 'classnames';

import './IconImg.css';

function IconImg(props) {
  const { className } = props;

  const classes = cx(['icon', className]);

  return (
    <div className={classes}>
      <svg height="256" width="256" fill="#4175df" viewBox="0 0 512 512"><path d="M233.92 198.08l-58.667 75.52-41.92-50.347-58.666 75.414h234.666z" /><path d="M341.333 0H42.667C19.093 0 0 19.093 0 42.667v298.667C0 364.907 19.093 384 42.667 384h298.667C364.907 384 384 364.907 384 341.333V42.667C384 19.093 364.907 0 341.333 0zm0 341.333H42.667V42.667h298.667v298.666z" /></svg>
    </div>
  );
};

IconImg.defaultProps = {
  className: undefined
};

export default IconImg;
