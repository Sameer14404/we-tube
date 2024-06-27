function randomComment() {
    // Array of random comments
    const comments = [
        "Amazing video! 😍",
        "Great content! 👏",
        "Well done! 🎉",
        "So informative! 🌟",
        "Loved it! ❤️",
        "Impressive work! 👍",
        "Can't stop watching! 🤩",
        "Fantastic job! 😊",
        "Incredible content! 🚀",
        "Really helpful! 🙌",
        "Awesome video! 💯",
        "Enjoyed every bit! 👌",
        "Superb presentation! 🌠",
        "Brilliant explanation! 🔥",
        "Mind-blowing stuff! 🤯",
        "Highly recommended! 📺",
        "So insightful! 💡",
        "Captivating! 🎥",
        "Well explained! 📚",
        "Fascinating! 🌌"
        // Add more comments as needed
    ];

    // Array of random names
    const names = [
        "John Doe",
        "Jane Smith",
        "Mike Johnson",
        "Emily Brown",
        "Chris Wilson",
        "Sarah Martinez",
        "David Thompson",
        "Lisa Garcia",
        "James Robinson",
        "Mary Hernandez"
    ];

    // Generate random index for comments and names
    const randomCommentIndex = Math.floor(Math.random() * comments.length);
    const randomNameIndex = Math.floor(Math.random() * names.length);

    // Get random comment and name
    const randomCommentText = comments[randomCommentIndex];
    const randomName = names[randomNameIndex];
let obj ={
    name: randomName,
    comment: randomCommentText
};


 

    return obj;
}
export default randomComment;
