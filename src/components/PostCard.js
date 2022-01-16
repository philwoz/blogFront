import React from "react";

export const PostCard = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type="submit" class="btn btn-primary">Edit Post</button> 
                <button type="button" class="btn btn-success">Delete</button>
            </div>
        </div>
    )
}
