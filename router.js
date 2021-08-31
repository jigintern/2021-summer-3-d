import {Router} from "./deps.js";
import {
  testRouter,
  getArticles,
  getArticle
} from "./controllers/api.js";

const router = new Router();

router.get('/api/test', testRouter);
router.get('/api/articles', getArticles);
router.get('/api/articles/:id', getArticle);

export default router;