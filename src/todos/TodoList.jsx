import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import {
  getTodosLoading,
  getCompletedTodos,
  getIncompleteTodos,
} from './selectors'
import {
  loadTodos,
  markTodoAsCompletedReuest,
  removeTodoRequest,
} from './thunks'
import {} from './actions'

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`

const TodoList = ({
  completedTodos,
  inCompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])
  const loadingMessage = <div>Loading todos....</div>

  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {inCompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  )
  return isLoading ? loadingMessage : content
}

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  inCompleteTodos: getIncompleteTodos(state),
})

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedReuest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
