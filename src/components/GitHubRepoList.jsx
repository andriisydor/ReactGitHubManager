import React from 'react';

import RepoItem from './RepoItem'

import {fetchRepositories} from '../actions/githubActions'

export default class GitHubRepoList extends React.Component {
    constructor(props) {
        super(props)
        this.downLoadMore = this.downLoadMore.bind(this)
    }
    downLoadMore(){

    }
    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchRepositories())
    }
    render() {
        const { repositories, isFetching } = this.props
        isFetching
        return (

          <section>
              {
                  isFetching?(<div>LOADING...</div>):
        repositories.map(repository=>{
            return (
                    <div key={repository.id}> <RepoItem repository={repository} />
                    </div>
                   )


        })
    }
    </section>
    )
  }

};
