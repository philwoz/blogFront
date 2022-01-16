export const fetchUsers = async (setUsers) => {
    const response = await fetch("http://localhost:5000/user", {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data);
  };


  export const fetchPosts = async (setPosts) => {
    const response = await fetch("http://localhost:5000/posts", {
      method: "GET",
    });
    const data = await response.json();
    setPosts(data);
  };