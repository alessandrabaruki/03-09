import { Router, Request, Response } from 'express';
import TodoController from '../controllers/todoController';

const router = Router();

router.get('/todos', async (req: Request, res: Response) => {
  await TodoController.getTodos(req, res);
});

router.post('/todos', async (req: Request, res: Response) => {
  await TodoController.createTodo(req, res);
});

router.put('/todos/:id', async (req: Request, res: Response) => {
  await TodoController.updateTodo(req, res);
});

router.delete('/todos/:id', async (req: Request, res: Response) => {
  await TodoController.deleteTodo(req, res);
});

export default router;
