import React from 'react';
import {useForm} from "react-hook-form";

import {commentService} from "../../services/commentService";
import {commentValidator} from "../../validators/commentValidator";
import styles from './CommentForm.module.css';
import {joiResolver} from "@hookform/resolvers/joi";

const CommentForm = () => {
    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm({
        mode: "all",
        resolver: joiResolver(commentValidator)
    });

    const addComment = async (comment) => {
        await commentService.addComment(comment);
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(addComment)} className={styles.CommentForm}>
                <h2>Add comment</h2>
                <input type="text" placeholder={'Post id'} {...register('postId')}/>
                <input type="text" placeholder={'Name'} {...register('name')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                <input type="text" placeholder={'Body'} {...register('body')}/>
                <button disabled={!isValid}>Add comment</button>
            </form>

            {errors.postId && <div>{errors.postId.message}</div>}
            {errors.name && <div>{errors.name.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
        </div>
    );
};

export {CommentForm};