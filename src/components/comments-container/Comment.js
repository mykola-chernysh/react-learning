import {Component} from "react";

import css from './Comment.module.css';

class Comment extends Component {

    render() {
        const {postId, id, name, email, body} = this.props.comment;

        return (
            <div className={css.Comment}>
                <div>PostId: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {Comment};