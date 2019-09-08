const defaultState = [
    {id:1, name: 'Nick', isTeacher:true },
    {id:2, name: 'Tim', isTeacher:false },
    {id:3, name: 'Sam', isTeacher:false },
];

const welcome = (state=defaultState, action) => {
    return state;
}

export default welcome;