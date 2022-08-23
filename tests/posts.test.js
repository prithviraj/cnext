var posts = require("../posts.json")


test("posts file exists and is not empty", () =>{
    expect(Object.entries(posts).length).toBeGreaterThanOrEqual(1)
});