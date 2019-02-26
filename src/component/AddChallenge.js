import React, {useState, useEffect} from 'react';
import {} from '../firebase/firebase';
import {addChallenge} from '../action/challenge';
import { connect } from 'react-redux';

const AddChallenge = (props) => {
    const [text, setText] = useState(false);
    const [input, setInput] = useState('');
  
    const inputChanged = (event) => {
        setInput(event.target.value);
      }
    
    
    const onHandleAddChallenge = (e) => {
        if (input.length > 0 ) {    
            props.addChallenge(input);
            setInput('');
            setText(true);
            setTimeout(() => {
                setText(false);
            }, 2000)
        }
    }
    return (
        <div className="App">
            <div>
                <h5>Idea for new challenge?</h5>
                <input type="text" value={input} onChange={inputChanged}></input>
                <button onClick={onHandleAddChallenge} className="btn btn-outline-primary btn-sm add-button">Add</button>
                {text && <p>Thank you for suggestion, we will work on it!</p>}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addChallenge: (challenge) => dispatch(addChallenge(challenge))
});

export default connect(undefined,mapDispatchToProps)(AddChallenge);