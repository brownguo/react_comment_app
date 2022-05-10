import React, { Component } from 'react'
import Comment from "./Comment";

class CommentList extends Component{
    static defaultProps = {
        comments: []
    }
    render() {
        return(
            <div>
                {
                    this.props.comments.map((content,i) => <Comment comment={content} key={i} />)
                }
            </div>
        )
    }
}
export default CommentList