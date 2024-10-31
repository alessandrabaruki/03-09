import Todo, { ITodo } from '../models/todoModel';

export default {
  async getTodos(): Promise<ITodo[]> {
    return await Todo.find();
  },

  async createTodo(title: string): Promise<ITodo> {
    const newTodo = new Todo({ title });
    return await newTodo.save();
  },

  async updateTodo(id: string, data: Partial<ITodo>): Promise<ITodo | null> {
    return await Todo.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteTodo(id: string): Promise<void> {
    await Todo.findByIdAndDelete(id);
  }
};
