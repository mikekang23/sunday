export const addTask = () => ({
  type: 'ADD_TASK'
});

export const descriptionChange = (id, content) => ({
  type:'DESCRIPTION_CHANGE',
  payload: {
    id: id,
    content: content
  }
})

export const ownerChange = (id, content) => ({
  type:'OWNER_CHANGE',
  payload: {
    id: id,
    content: content
  }
})

export const statusChange = (id, content) => ({
  type:'STATUS_CHANGE',
  payload: {
    id: id,
    content: content
  }
})

export const dueDateChange = (id, content) => ({
  type:'DUEDATE_CHANGE',
  payload: {
    id: id,
    content: content
  }
})
