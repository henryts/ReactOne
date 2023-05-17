import React from 'react';
import './filter.css';

class Tool extends React.Component
{
   

    //const l = props.children;
  render(){
    const {
        children,
        onAction
    }=this.props;
    return(
   <div>
    <div className="custom-select">
  <select name="my-select" onChange={onAction}>
    <option value="All">All</option>
    <option value="Available">Available</option>
    <option value="Unavailable">Unavailable</option>
  </select>
  <div className="select-arrow"></div>
</div>
{children}

</div>
 
  
    );
  }

}
export default Tool