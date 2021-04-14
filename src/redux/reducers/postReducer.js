const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      let newBlogList = [...state];
      //console.log(newBlogList)
      console.log(action.payload)
      newBlogList.push(action.payload);
      return newBlogList;
    case "GET_POSTS":
      let newList = [...state];
      newList.push(...action.payload);
      return newList;
    default:
      return state;
  }
};

export default postReducer;
