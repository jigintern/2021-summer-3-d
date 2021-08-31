import {Router} from "../deps.js";
import {
  testRouter,
  getArticles,
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
} from "../controllers/api.js";

const router = new Router();

router
  .get('/api/test', testRouter)
  .get('/api/articles', getArticles)
  .get('/api/articles/:id', getArticle)
  .post('/api/articles', addArticle)
  .put('/api/articles/:id', updateArticle)
  .delete('/api/articles/:id', deleteArticle)

export default router;