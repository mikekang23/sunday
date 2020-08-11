const initialState = {
  tasks: {},
  owners: [
    {
      id: 1,
      name: 'Mike',
      avatar: '../../../public/img/mike.png'
    },
    {
      id: 2,
      name: 'Sandra',
      avatar: '../../../public/img/sandra.png'
    },
    {
      id: 3,
      name: 'Mo',
      avatar: '../../../public/img/mo.png'
    }
  ],
  status: [
    {
      id: 1,
      title: 'On Target',
      bgColor: 'Orange'
    },
    {
      id: 2,
      title: 'Not On Target',
      bgColor: 'Violet'
    },
    {
      id: 3,
      title: 'Stuck',
      bgColor: 'Tomato'
    },
    {
      id: 4,
      title: 'Done!',
      bgColor: 'MediumSeaGreen'
    }
  ]
}
export default function(state = initialState, action) {
  let id = Object.keys(state.tasks).length + 1

  switch(action.type){
    case 'ADD_TASK':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            description: "",
            owner: null,
            status: null,
            duedate: ""
          }
        }
      }
    case 'DESCRIPTION_CHANGE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            description: action.payload.content
          }
        }
      }
    case 'OWNER_CHANGE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            owner: action.payload.content
          }
        }
      }
    case 'STATUS_CHANGE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            status: action.payload.content
          }
        }
      }
    case 'DUEDATE_CHANGE':
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.payload.id]: {
            ...state.tasks[action.payload.id],
            duedate: action.payload.content
          }
        }
      }
    default:
      return state

  }
}
