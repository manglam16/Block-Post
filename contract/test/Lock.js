const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Blog", () => {
  let blog;

  beforeEach(async () => {
    blog = await ethers.getContractFactory("Blog");
    const deployedBlog = await blog.deploy();
    await deployedBlog.deployed();
  });

  it("should create a new post", async () => {
    const title = "My first post";
    const content = "This is my first post on the blockchain.";

    await blog.createPost(title, content, author);

    const post = await blog.getPost(1);

    expect(post.title).toEqual(title);
    expect(post.content).toEqual(content);
    expect(post.author).toEqual(author);
  });
});
