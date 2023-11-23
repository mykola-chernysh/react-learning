import {Component} from "react";

import css from './Post.module.css';
class Post extends Component{

    render() {
        const {userId, id, title, body} = this.props.post;

        return (
            <div className={css.Post}>
                <div>UserId: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {Post};