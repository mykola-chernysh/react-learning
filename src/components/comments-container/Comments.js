import {Component} from "react";

import css from './Comments.module.css';
import {commentsService} from "../../services";
import {Comment} from "./Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(({data}) => this.setState({comments: data}))
    }

    render() {
        return (
            <div className={css.Comments_container}>
                <h1>Comments</h1>

                <div className={css.Comments}>
                    {
                        this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                    }
                </div>
            </div>

        )
    }
}

export {Comments};