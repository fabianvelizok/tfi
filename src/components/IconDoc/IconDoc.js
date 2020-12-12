import cx from 'classnames';

import './IconDoc.css';

function IconDoc(props) {
  const { className } = props;

  const classes = cx(['iconDoc', className]);

  return (
    <svg className={classes} height="128px" width="128px" viewBox="0 0 459 459"><path d="M408 0H51C22.95 0 0 22.95 0 51v357c0 28.05 22.95 51 51 51h357c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zm-51 153H102v-51h255v51zm0 102H102v-51h255v51zm-76.5 102H102v-51h178.5v51z"/></svg>
  );
};

IconDoc.defaultProps = {
  className: undefined
};

export default IconDoc;
