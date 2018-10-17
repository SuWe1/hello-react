import React, { Component } from 'react'
import Comment from './Comment';

class CommentList extends React.PureComponent {

    static defaultProps = {
        comments: [
            { username: 'Wenbin', content: 'hello' },
            { username: 'Yzk', content: '炮哥666' },
            { username: 'Lxh', content: '炮哥0110 0110 0110' },
        ]
    }

    render() {
        // console.log(this.props.comments)
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}

export default CommentList