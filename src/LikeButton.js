import React from 'react';
import ReactDOM from 'react-dom';

class LikeButton extends React.PureComponent {

    static defaultProps = {
        likeText: '取消',
        unlikeText: '点赞'
    }

    constructor() {
        super()
        this.state = {
            isLike: false,
            name: "Tonny"
        }
    }

    handleClickOnLikeButton() {
        this.setState({
            isLike: !this.state.isLike
        })
    }

    render() {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLike ? this.props.likeText : this.props.unlikeText}
            </button>
        )
    }
}

export default LikeButton