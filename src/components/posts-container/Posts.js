import {Component} from "react";

import css from './Posts.module.css';
import {postsService} from "../../services";
import {Post} from "./Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postsService.getAll().then(({data}) => this.setState({posts: data}));
    }

    render() {
        return (
            <div className={css.Posts_container}>
                <h1>Posts</h1>

                <div className={css.Posts}>
                    {
                        this.state.posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>
            </div>
        )
    }
}

export {Posts};