import React, { Component } from 'react';

class Note extends Component{

	constructor() {
		super();
		this.state = {editing : false};
		//alert(this.state.editing);
	}
    // method to edit the note
	edit(){
		//alert(this.setState);
		this.setState({editing :  true});
		alert("editing");
	}

	save(){
		alert("save");
		this.setState({editing: false});
	}

	remove(){
		this.setState = ({ editing: true});
		alert("remove");
	}

	renderForm(){
		
         return (
         	<div className="note">
                <textarea></textarea>
                <button onClick={this.save.bind(this)}>Save</button>
         	</div>);
	}

	renderDisplay(){
		
		return (
			<div className="note">
               <p>{this.props.children}</p>
               <span>
               <button onClick={this.edit.bind(this)}>Edit</button>
               <button onClick={this.remove.bind(this)}>x</button>
               </span>
			</div>
		);
	}
 
	render(){
		
		return (this.state.editing) ? this.renderForm():this.renderDisplay();
	}
}

export default Note;