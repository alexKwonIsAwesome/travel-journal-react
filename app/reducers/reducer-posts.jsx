var uuid = require('node-uuid');

var initialState = [
  {
    id: uuid(),
    title: 'intro',
    content: 'love'
  }, {
    id: uuid(),
    title: 'prep',
    content: 'hey'
  }, {
    id: uuid(),
    title: 'Day 1',
    content: 'good day'
  }
];

export var postsReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          id: uuid(),
          title: action.title,
          content: action.content
        }
      ]
    default:
      return state;
  }
};
