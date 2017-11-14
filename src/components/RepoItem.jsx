import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'
import ActionHome from 'material-ui/svg-icons/action/home'

import {fetchRepositories} from '../actions/githubActions'

export default class RepoItem extends React.Component {
    render() {
        const { repository } = this.props
        const owner = repository.owner
        return (
            <Card>
                <CardHeader
                    title={owner.login}
                    subtitle={owner.html_url}
                    avatar={owner.avatar_url}
                />
                <CardTitle title={repository.name} subtitle={repository.full_name} />
                <CardText>
                    {repository.description}
                </CardText>
                <CardActions>
                    <RaisedButton
                        href={repository.html_url}
                        target="_blank"
                        label="View on Github"
                        secondary={true}
                        icon={<ActionHome />}
                    />
                </CardActions>
            </Card>

    )
    }

};
