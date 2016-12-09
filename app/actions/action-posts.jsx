export var addPost = function (title, content) {
  return {
    type: 'ADD_POST',
    title: title,
    content: content
  }
};

export var dummyAction = function () {
  return {
    type: 'DUMMMY_ACTION'
  }
};
