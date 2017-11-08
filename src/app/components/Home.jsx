import React from 'react'

import { connect } from 'react-redux'

import GitHubRepoListContainer from '../containers/GitHubRepoListContainer'



class Home extends React.Component  { 
    render() {

        return (
    <div><GitHubRepoListContainer /></div>
                    
)}};


module.exports = connect()(Home);