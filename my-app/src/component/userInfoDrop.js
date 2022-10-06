import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { logout } from '../Actions/AutAction';
import { Link,  } from "react-router-dom";
import {useDispatch} from 'react-redux'



const Example = ({ direction, ...args }) => {
    const dispatch =useDispatch();

  const logOut = ()=>{
    dispatch (logout())
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  
  return (
    <div className="d-flex m-3">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
        <DropdownToggle caret>
          {localStorage.getItem('userName')}
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem><Link to='/' onClick={()=> logOut()}>Log Out</Link></DropdownItem>

        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default Example;