import React, { Component } from 'react';
import render from 'react-dom';

import { connect } from 'react-redux';

class MovieApp extends Component{

	
	render(){

		return (
            
            <div></div>

			)
	}
}

const mapStateToProps = function(state){
	console.log("component");
	console.log(state);
    return{
    	movies : state.moviesList
    }
}

export default connect(mapStateToProps)(MovieApp);