import React from 'react';
import { Link } from 'react-router-dom';
import './Activities.css';

const Activities = (props) => {
    const {id, img, desc} = props.activities;
    const handleActivity = props;
    
    return (
       
            <div className="container" >
            <div className=" activity-img ">
                <div className=" d-flex row">
                    <div  className=" col-md-3" >
                        <Link to={`/register/${desc}`}><img src={img} alt="img" width="200" height="200"/></Link>
               <div className='description'>
                    <p>{desc}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
       
    );
};

export default Activities;