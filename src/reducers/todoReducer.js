export default function todoReducer(state = [], action){
    switch(action.type){
        case 'CREATE_TODO':
        return [...state,
            Object.assign({}, action.todo)
        ];

        default:
            return state;
    }
}