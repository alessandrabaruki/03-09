import { Request, Response } from 'express';
import TodoService from '../services/todoService';

export default {
  async getTodos(req: Request, res: Response) {
    try {
      const todos = await TodoService.getTodos();
      return res.status(200).json({ status: 200, msg: todos });
    } catch (error) {
      return res.status(400).json({ status: 400, msg: { error: "Erro ao listar tarefas" } });
    }
  },

  async createTodo(req: Request, res: Response) {
    const { title } = req.body;
    try {
      const newTodo = await TodoService.createTodo(title);
      return res.status(201).json({ status: 201, msg: newTodo });
    } catch (error) {
      return res.status(400).json({ status: 400, msg: { error: "Erro ao criar tarefa" } });
    }
  },

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { title, completed } = req.body;
    try {
      const updatedTodo = await TodoService.updateTodo(id, { title, completed });
      if (updatedTodo) {
        return res.status(200).json({ status: 200, msg: updatedTodo });
      } else {
        return res.status(404).json({ status: 404, msg: { error: "Tarefa não encontrada" } });
      }
    } catch (error) {
      return res.status(400).json({ status: 400, msg: { error: "Erro ao atualizar tarefa" } });
    }
  },

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await TodoService.deleteTodo(id);
      return res.status(204).json({ status: 204, msg: "Tarefa excluída com sucesso" });
    } catch (error) {
      return res.status(400).json({ status: 400, msg: { error: "Erro ao excluir tarefa" } });
    }
  }
};
