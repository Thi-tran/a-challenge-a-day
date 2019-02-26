import {addChallenge} from "../firebase/firebase";

const listOfChallengeDefaultState = [];

export default (state = listOfChallengeDefaultState, action) => {
    switch (action.type){
        case 'ADD_CHALLENGE': 
            addChallenge(action.challenge.title);
            return [
                ...state, 
                action.challenge
            ];

        default: 
            return state;
    }
};