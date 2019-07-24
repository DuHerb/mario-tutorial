const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'some text goes here for content'},
    {id: '2', title: 'stomp some goombahs', content: 'some text goes here for content'},
    {id: '3', title: 'eat some mushrooms', content: 'some text goes here for content'},
    {id: '4', title: 'gather coins', content: 'some text goes here for content'},
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;