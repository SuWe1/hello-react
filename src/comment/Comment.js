import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Comment extends React.PureComponent {

    static propTypes = {
        comment: PropTypes.object.isRequired
    }

    constructor() {
        super()
        this.state = {
            timeString: ''
        }
    }

    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    componentWillMount() {
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: this._getTimeStr(duration)
        })
    }

    _getTimeStr(duration) {
        if (duration > 60 * 60 * 24) {
            //天
            return `${Math.round(duration / 60 / 60 / 24)} 天前`
        } else if (duration > 60 * 60) {
            //小时
            return `${Math.round(duration / 60 / 60)} 小时前`
        } else if (duration > 60) {
            //分钟
            return `${Math.round(duration / 60)} 分钟前`
        } else {
            //秒
            return `${Math.round(Math.max(duration, 1))} 秒前`
        }
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username}</span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteComment.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment