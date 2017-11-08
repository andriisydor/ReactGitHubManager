import { 
    FETCH_REPOSITORIES, 
    FETCH_REPOSITORIES_SUCCESS,
} from '../actions/actionTypes'

const githubReducerInitialState = {
    isFetching: false,
    repositories: [],
    lastRepoId: 0
}

const githubReducer = (state = githubReducerInitialState, action) =>{
    console.log(state);
    console.log(action);
    switch (action.type) {
        case FETCH_REPOSITORIES:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case FETCH_REPOSITORIES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                repositories: action.repositories,
                lastRepoId: action.lastRepoId
            })
        default:
            return state
    }
}

export default githubReducer;