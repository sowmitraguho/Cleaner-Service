



const UsersReview = ({user}) => {
    const { name, comment, image} = user;
  return (
    <div>
      <div className="bg-slate-200">
        <div className="flex flex-row">
          <img
            src={image}
            className="w-12 rounded-lg"
          />
          <div>
            <h1 className="font-bold">{name}</h1>
            <p className="">
              {comment}
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersReview;
