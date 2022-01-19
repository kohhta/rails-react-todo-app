import client from "./client"
import { Todo } from "../../interfaces/index"

// contorollerのメソッドを呼び出す関数をここで作る

// todo一覧を取得
export const getTodos = () => {
  return client.get("/todos")
}

// todoを新規作成
export const createTodo = (data: Todo) => {
  return client.post("/todos", data)
}

// todoを削除
export const deleteTodo = (id: number) => {
  return client.delete(`/todos/${id}`)
}
