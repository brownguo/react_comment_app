import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from "./Clock";

class CommentApp extends Component{
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    handleSubmitComment(comment){
        this.state.comments.push(comment)
        this.setState({
            comment: this.state.comments
        })
    }


    render() {
        return(
            <div className='wrapper'>
                <Clock />
                <CommentInput onTestSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}
export default CommentApp