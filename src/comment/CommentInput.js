import React from 'react';
import PropTypes from 'prop-types';

class CommentInput extends React.PureComponent {

    static propTypes = {
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            username: "",
            content: ""
        }
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }


    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(event) {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({
            content: ""
        })
    }

    /**
     * 用户名输入框失去焦点时
     * @param {*} e 
     */
    handleUsernameBlur(e) {
        this._saveUserName(e.target.value)
    }

    _saveUserName(username) {
        localStorage.setItem('username', username)
    }

    _loadUserName() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({
                username: username
            })
        }
    }

    componentWillMount() {
        this._loadUserName()
    }

    componentDidMount() {
        this.textarea.focus()
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameBlur.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                            ref={(textarea) => this.textarea = textarea} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        提交
                </button>
                </div>
            </div>
        )
    }
}

export default CommentInput