import React, {FC} from 'react';
import {Link} from "react-router-dom";
import Button from "../../uiBricks/Button";

interface Props {
  className?: string
}

const CatalogFilmsBtn:FC<Props> = ({className}) => {
  const classes = className ? 'w-[75%] m-auto ' + className : 'w-[75%] m-auto'
  return (
    <Button className={classes}>
      <Link to="/films">Каталог фильмов</Link>
    </Button>
  );
};

export default CatalogFilmsBtn;