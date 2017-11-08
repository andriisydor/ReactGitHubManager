import React from 'react';

//import CircularProgress from 'material-ui/CircularProgress'

import {fetchRepositories} from '../actions/githubActions'

export default class RepoItem extends React.Component {
    render() {
        const { name, description, url } = this.props
        return (
          <div>
                <div>Name: {name}</div>
                <div>URL: <a href={url}>{url}</a></div>
                <div>Description: {description}</div>
      </div>
    )
    }

};
