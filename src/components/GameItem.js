import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import LinearProgress from 'material-ui/LinearProgress'
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

class GameItem extends Component {
    render() {
        var genres = this.props.data.genre.split(',');
        var genrelist = genres.map(function (genre, index) {
            return (
                <Chip key={index} style={{margin: '5% 0 5% 0'}}><Avatar size={32} style={{backgroundColor: "#FF99FF"}}>{genres[index][0]}</Avatar>{genre}</Chip>
            );
        }, this);

        return (
            <div className="box">
            <Card >
                <CardHeader
                    title={this.props.data.title}
                    subtitle={this.props.data.platform}
                    actAsExpander={false}
                    showExpandableButton={false}
                />
                <CardText >
                    <strong>Rating: {this.props.data.score} / 10</strong>
                    <div>
                        {this.props.data.genre !== '' && genrelist}
                        {this.props.data.editors_choice === 'Y' && <Chip style={{margin: '5% 0 5% 0'}}><Avatar size={32} style={{backgroundColor: "#99FFFF"}}>E</Avatar> Editors choice</Chip> }
                    </div>
                    <LinearProgress mode="determinate" color="#9966FF" value={this.props.data.score * 10} style={{backgroundColor: "#778899"}}/>
                </CardText>
            </Card>
            </div>
        );
    }
}

export default GameItem;