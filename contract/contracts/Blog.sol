pragma solidity ^0.8.0;

contract Blog {
    // Events
    event PostCreated(
        uint256 indexed id,
        string title,
        string content,
        string author
    );

    // Structure to store a post
    struct Post {
        uint256 id;
        string title;
        string content;
        string author;
    }

    // Mapping from post ID to post
    mapping(uint256 => Post) public posts;

    // Function to create a new post
    function createPost(
        string memory title,
        string memory content,
        string memory author
    ) public {
        // Create a new post
        Post memory newPost;
        newPost.id = uint256(now);
        newPost.title = title;
        newPost.content = content;
        newPost.author = author;

        // Add the post to the mapping
        posts[newPost.id] = newPost;

        // Emit an event to notify listeners
        emit PostCreated(
            newPost.id,
            newPost.title,
            newPost.content,
            newPost.author
        );
    }

    // Function to get a post by ID
    function getPost(uint256 id) public view returns (Post memory) {
        // Get the post from the mapping
        return posts[id];
    }
}
