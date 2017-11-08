import fetch from 'isomorphic-fetch'

import { 
    FETCH_REPOSITORIES, 
    FETCH_REPOSITORIES_SUCCESS,
    } from '../actions/actionTypes'

function requestRepos() {
    return {
        type: FETCH_REPOSITORIES
    }
}

function receiveRepos(repos) {
    return {
        type: FETCH_REPOSITORIES_SUCCESS,
        repositories: repos,
        lastRepoId:repos[repos.length - 1].id,
        receivedAt: Date.now()
    }
}

function requestRepositories(id) {
    return dispatch => 
    {

        dispatch(requestRepos())
        return fetch('https://api.github.com/repositories')
                    .then(response => response.json())
                    .then(json => dispatch(receiveRepos(json)))
                    .catch(function(error) {
                        console.log('There has been a problem with your fetch operation: ' + error.message);
                    })
    }
}



export function fetchRepositories(id = null) {
    return (dispatch, getState) => {       
            return dispatch(requestRepositories(id))       
    }
}
