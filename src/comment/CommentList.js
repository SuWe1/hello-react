import React, { Component } from 'react'
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends React.PureComponent {

    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: [
            { username: 'Wenbin', content: 'hello' },
            { username: 'Yzk', content: '炮哥666' },
            { username: 'Lxh', content: '炮哥0110 0110 0110' },
        ]
    }

    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        // console.log(this.props.comments)
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        )
    }
}

export default CommentList