import React from 'react';
import './content.css';

function Content(props)
{ 
    if(props.isAvailable)
        {
            var status="available";
            var class1="availability"
        }
        else{
             status="unavailable";
             class1="Unavailability"
        }

   // console.log(props);
    return(
      
<div className="card">
<h2 className="topic">{props.title}</h2>
<p className="description">{props.discr}</p>
 <span className={class1}>{status}</span>

   


</div>
    );
}
export default Content