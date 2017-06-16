import React, { Component } from 'react';
import Note from './Note';

class Board extends Component {

    constructor(props) {
        super(props);
        alert(props);
        this.state = { notes: [] };

    }

    componentWillMount() {
    	/*if (this.props.count) {
                    var url = `http://baconipsum.com/api/?type=all-meat&sentences=${this.props.count}`
                    fetch(url)
                          .then(results => results.json())
                          .then(array => array[0])
                          .then(text => text.split('. '))
                          .then(array => array.forEach(
                                sentence => this.add(sentence)))
                          .catch(function(err) {
                            console.log("Didn't connect to the API", err)
                          })
                }*/
    }

     nextId() {
                this.uniqueId = this.uniqueId || 0
                return this.uniqueId++
    }

    updateNotes(text, id) {

        var notes = this.state.notes.map(
                    note => (note.id !== id) ?
                       note : 
                        {
                            ...note, 
                            note: text
                        }
                    )
        this.setState({notes})
    }

    remove(id) {
         var notes = this.state.notes.filter(note => note.id !== id)
                this.setState({notes})
    }

    eachNote(note) {
            return ( <Note key = { note.id }
                id = { note.id }
                onChange = { this.update }
                onRemove = { this.remove } > { note.note } < /Note>)
     }

      render() {
                return ( < div className = 'board' > { this.state.notes.map(this.eachNote.bind(this)) } < button onClick = {
                        () => this.add('New Note') } > + < /button> < /div>)
                }




            }

export default Board;


Board.propTypes = {
	count : function(props,propName){
         if(typeof props[propName] !== "number"){
             return new Error("count must be number");
         }
	}
}
