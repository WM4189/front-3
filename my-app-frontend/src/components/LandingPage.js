import { Header, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "5px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white"
  };


function LandingPage(){
   
	


// debugger; 
    return(  
        <div id="homeNav">
    <Header as='h2' icon>
        <Icon name='book'/>
        Study Buddy
        <Header.Subheader >
        Learning is Fun
        </Header.Subheader>
        <div id="homeNav">
        <NavLink
			to="/html"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  HTML
		</NavLink>
        <NavLink
			to="/css"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  CSS
		</NavLink>
        <NavLink
			to="/javaScript"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  JS
		</NavLink>
        <NavLink
			to="/python"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  Python
		</NavLink>
        <NavLink
			to="/java"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  Java
		</NavLink>
        <NavLink
			to="/cplus"
			exact
			style={linkStyles}
			activeStyle={{
			  background: "blue",
			}}
		  >
		  C++
		</NavLink>
        </div>
    </Header>
    </div>

    )
}

export default LandingPage;