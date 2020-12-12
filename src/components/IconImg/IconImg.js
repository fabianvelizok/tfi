import cx from 'classnames';

import './IconImg.css';

function IconImg(props) {
  const { className } = props;

  const classes = cx(['iconImg', className]);

  return (
    <svg className={classes} height="128px" width="128px" fill="#4175df" viewBox="0 0 459 459"><path d="M459 408V51c0-28.05-22.95-51-51-51H51C22.95 0 0 22.95 0 51v357c0 28.05 22.95 51 51 51h357c28.05 0 51-22.95 51-51zM140.25 267.75l63.75 76.5 89.25-114.75L408 382.5H51l89.25-114.75z"/></svg>
  );
};

IconImg.defaultProps = {
  className: undefined
};

export default IconImg;
