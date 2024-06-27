import React from "react";

let comments = [
  {
    id: 1,
    name: "John Doe",
    text: "This is a comment.",
    replies: [
      {
        id: 2,
        name: "Jane Smith",
        text: "This is a reply to the comment.",
        replies: [
          {
            id: 3,
            name: "John Doe",
            text: "This is a nested reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Alice Johnson",
    text: "This is another comment.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex flex-col sm:flex-row bg-slate-200 p-4 m-3 rounded-lg shadow-md">
      <div className="flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s"
          alt="logo"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="ml-4 mt-2 sm:mt-0 p-3 bg-white rounded-lg shadow-sm w-full">
        <p className="font-bold text-lg">{name}</p>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((el) => (
    <div key={el.id} className="ml-0 sm:ml-8">
      <Comment data={el} />
      {el.replies && el.replies.length > 0 && (
        <div className="ml-4 sm:ml-8">
          <CommentList comments={el.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentContainers = () => {
  return (
    <div className="m-5 p-5 bg-gray-100 rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold mb-5">Comments:</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainers;
