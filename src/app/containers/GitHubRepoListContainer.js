import { connect } from 'react-redux'

import GitHubRepoList from '../components/GitHubRepoList'

const mapStateToProps = (state) => {
    return state.githubReducer
}


const GitHubRepoListContainer = connect(
  mapStateToProps
)(GitHubRepoList)

export default GitHubRepoListContainer