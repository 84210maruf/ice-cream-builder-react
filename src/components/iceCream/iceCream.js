import React from 'react';
import classes from './iceCream.module.css';
import Scoop from './Scoop/Scoop';

const iceCream = ({ scoops}) => {
    // props = item
    // const flavors = Object.keys(items);
    //  const flaPrice = Object.values(items);

    return (
        <div>
        <div className={classes.icecream}>
          <p className={classes.cone}></p>
          
          {/* Scoop componant(Adding Scoop)*/}
          
          {/* {flavors.map((flavor) => <Scoop key={flavor} scoop={flavor} />)} */}
          {scoops.map((scoop) => <Scoop key={`${scoop} ${Math.random()}`} scoop={scoop} />)}
             
          
          <div className={classes.cherry}></div>
        </div>
      </div>
    );
}

export default iceCream;
