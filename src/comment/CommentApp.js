import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './CommentStyle.css';

var commentData = []

class CommentApp extends React.PureComponent {

    constructor() {
        super()
        this.state = {
            comments: [],
        }

    }

    handleDeleteComment(index) {
        commentData.splice(index, 1)
        this.setState({ comments :commentData})
        this._saveComments()
    }

    _saveComments() {
        // console.log(JSON.stringify(commentData))
        localStorage.setItem('comments', JSON.stringify(commentData))
    }


    _loadComments() {
        let cs = localStorage.getItem('comments')
        if (cs) {
            cs = JSON.parse(cs)
            commentData = commentData.concat(cs)
            this.setState({
                comments: commentData
            })
        }
    }

    componentWillMount() {
        console.log('组件挂载即将开始')
        this._loadComments()
    }

    componentDidMount() {
        console.log('组件挂载完成')
    }

    componentWillUnmount() {
        console.log('组件对于的DOM即将删除')
    }



    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        commentData.push(comment)
        // console.log(comment)
        // console.log(commentData)
        this.setState({
            //这样做是因为contact生成了新的array PureComponent才会认为数据不同了
            comments: [].concat(commentData)
        })
        this._saveComments()
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}

export default CommentApp