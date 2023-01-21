const CommentCard = ({ name, email, body }) => {
    return (
        <div className="border p-5">
            <h4 className="font-medium">Name: {name}</h4>
            <h4 className="font-medium">Email: {email}</h4>
            <h4 className="font-medium">Details: {body}</h4>
        </div>
    );
};

export default CommentCard;
