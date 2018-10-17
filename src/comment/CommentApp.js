import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentStyle.css';

const commentData = []

class CommentApp extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            comments: [],
        }

    }

    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        commentData.push(comment)
        // console.log(comment)
        // console.log(commentData)
        this.setState({
            comments: [].concat(commentData)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp