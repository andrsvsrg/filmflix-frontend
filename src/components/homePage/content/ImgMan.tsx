import React, {FC} from 'react';

interface Props {
  className?: string
}
const ImgMan: FC<Props> = ({className}) => {
  const classes = className ? 'mx-auto h-auto ' + className : 'mx-auto h-auto '
  return (
    <>
      <img className={classes}
           src="https://gowo.su/assets/images/home-man.png"
           alt="man"
      />
    </>
  );
}

export default ImgMan;