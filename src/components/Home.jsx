import React from 'react'

import { connect } from 'react-redux'

import GitHubRepoListContainer from '../containers/GitHubRepoListContainer'



export default class Home extends React.Component  {
    render() {

        return (
    <div><GitHubRepoListContainer /></div>
                    
)}};

connect()(Home);
