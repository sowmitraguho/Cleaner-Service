import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Comment = () => {
    const {user} = useContext(AuthContext);
    //console.log(user);
    const [comment, setComment] = useState({});
    const submitComment = (event) => {
      event.preventDefault();
      const form = event.target;
      const addedComment = form.comment.value;
      const { name, image} = user;
      const newComment = {name, image, addedComment};
      setComment(newComment);

      fetch("http://localhost:5000/comments", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment)
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      if(data.acknowledged) {
        alert('comment added succesfully');
        event.target.reset();
      }
    }) 
    }

  return (
    <div>
      <h2 className="text-lg text-slate-900 mb-4">Add Your Comment</h2>
      <form onSubmit={submitComment}>
      <input
        type="text"
        placeholder="Type here"
        className="input border border-blue-500 mb-4 w-full bg-white"
        name="comment"
      />
      <Link  className="btn btn-primary">Submit</Link>
      </form>
      
    </div>
  );

  }
  

export default Comment;
