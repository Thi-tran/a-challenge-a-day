import React, { useState, useEffect } from 'react';
import {addComment, getChallenge, getComment} from '../firebase/firebase';
import ShowComment from './ShowComment';
const ShowChallenge = () => {

    const [text, setText] = useState(false);
    const [data, setData] = useState();
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [listOfChallenge, setListOfChallenge] = useState([]);
    const [acceptChallenge, setAcceptChallenge] = useState();
    const [finishChallenge, setFinishChallenge] = useState(false);
    const [listOfComment, setListOfComment] = useState([]);
    const [showComment, setShowComment] = useState(false);

    const handleShowButton = () => {
      setText(true);
      const data = listOfChallenge[Math.floor(Math.random() * listOfChallenge.length)];
      setData(data);
      setShowComment(false);
      setListOfComment(getComment(data.id));
    }
    

    const handleShowComment = () => {
      setShowComment(!showComment);
    }
    const handleAcceptButton = () => {
      setAcceptChallenge(data.title);
      setText(false);
      // Workaround with localStorage for Object
      localStorage.setItem('challenge-title', data.title);
      localStorage.setItem('challenge-id', data.id);
    }
    

    const handleGiveUp = () => {
      setAcceptChallenge('');
      localStorage.setItem('challenge-title', '');
      localStorage.setItem('challenge-id', '');
      setFinishChallenge(false);
      handleShowButton();
    }
    // When user finishes the challenge, he will give comment for it
    const handleFinishButton = () => {
      setFinishChallenge(true);
    }

    const handleSubmitFinishButton = () => {
      // Add comments to firebase
      const id = localStorage.getItem('challenge-id');
      addComment(id, name, comment);

      // Close comment box
      setAcceptChallenge();
      setFinishChallenge(false);
      setName('');
      setComment('');
      localStorage.setItem('challenge-title', '');
      localStorage.setItem('challenge-id', '');
    }

    const inputNameChanged = (event) => {
      setName(event.target.value);
    }

    const inputCommentChanged = (event) => {
      setComment(event.target.value);
    }

    // Set inital challenge 
    useEffect(() => {
        setListOfChallenge(getChallenge());
        setAcceptChallenge(localStorage.getItem('challenge-title'));
    }, [])

    return (
        <div className="App">
          <div>
            {!acceptChallenge && <button onClick={handleShowButton} className="btn btn-danger"><strong>GET ACTION</strong></button>}
          </div>
        
          <div>
            {text && <p className="challenge-show">{data.title}</p>}

            {showComment && <div>{listOfComment.map((comment) => 
              <ShowComment 
                key={comment.id}
                name={comment.name}
                comment={comment.comment}
              />
            )}
            </div>}
          </div>
          <p></p>
          <div>
            {data && <button onClick={handleShowComment} className="btn btn-info">What People say about it?</button>}
            
            {data && <button onClick={handleAcceptButton} className="btn btn-primary"><strong>Accept Challenge</strong></button>}
            
          </div>
          
          <div>
            {acceptChallenge && <p className="current-challenge">Your current challenge: <p><strong>{acceptChallenge}</strong></p></p>}
            
            {acceptChallenge && <button onClick={handleGiveUp} className="btn btn-secondary">Well, give me another one</button>}
            {acceptChallenge && <button onClick={handleFinishButton} className="btn btn-success">YEAAAH I got it done</button>}

            {finishChallenge && 
            <div>
              <h3>So, how was the challenge?</h3>
              <div>   Name <input type="text" value={name} onChange={inputNameChanged} name="name"></input></div>
              <div>Comment <input type="text" value={comment} onChange={inputCommentChanged} name="comment"></input></div>
              <button onClick={handleSubmitFinishButton} className="btn btn-dark mt-2">Share it</button>
            </div>
            }
          </div>
        </div>
      );
}

export default ShowChallenge;