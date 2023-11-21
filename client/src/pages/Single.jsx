import React from "react";
import Delete from "../images/delete (1).png";
import Edit from "../images/editing.png";
import Profile from "../images/aramppp.jpg";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img
          src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt=''
        />
        <div className='user'>
          <img src={Profile} alt='' className='user-profile' />
          <div className='info'>
            <span>Aram</span>
            <p>posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Delete} className='icons' alt='' />
            </Link>
            <img src={Edit} className='icons' alt='' />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          voluptatibus eum deserunt a nemo expedita, minima eaque. Provident,
          <br />
          <br />
          illum, voluptatibus at pariatur dolorem praesentium id corporis
          impedit ab placeat totam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nostrum voluptatibus eum deserunt a nemo expedita,
          minima eaque. Provident,
          <br />
          <br />
          illum, voluptatibus at pariatur dolorem praesentium id corporis
          impedit ab placeat totam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nostrum voluptatibus eum deserunt a nemo expedita,
          minima eaque. Provident, illum, voluptatibus at pariatur dolorem
          praesentium id corporis impedit ab placeat totam.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
