import React, { Component } from 'react';

class Note extends Component{

	constructor() {
		super();
		this.state = {editing : false};
	}
    // method to edit the note
	edit(){
		//alert(this.setState);
		this.setState({editing :  true});
		alert("editing");
	}
    
    //called before the render method
     componentWillMount() {
         this.style = {
                right: this.randomBetween(0, window.innerWidth - 150, 'px'),
                top: this.randomBetween(0, window.innerHeight -150, 'px')
         }
     }
    
    //method will be invoked to update the text in the dom
    componentDidUpdate() {
     if (this.state.editing) {
                    this.refs.newText.focus()
                    this.refs.newText.select()
          }
      }


     shouldComponentUpdate(nextProps, nextState) {
                return this.props.children !== nextProps.children || this.state !== nextState
       }
     
     //generate random number to position the note
     randomBetween(x, y, s) {
                return (x + Math.ceil(Math.random() * (y-x))) + s
     }

	save(){
		//alert("save");
		this.setState({editing: false});
	}

	remove(){
		this.setState = ({ editing: true});
		//alert("remove");
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