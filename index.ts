import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { apiUrl, getVersion, port } from "~/env/env-manager";
import { ArticleRepository } from "~/repositories/articleRepository";
import { ArticleService } from "~/services/articleService";

// 初始化資料表
ArticleRepository.createTable();

const app = new Elysia()
  .use(
    swagger({
      path: "/apidocs",
      documentation: {
        info: { version: getVersion(), title: "article-hub" },
      },
    }),
  )
  .post("/fetch-articles", async () => {
    const count = await ArticleService.fetchAndStoreArticles(apiUrl);
    return { message: `Articles fetched and stored ${count}` };
  })
  .get("/articles", async () => {
    const articles = ArticleService.getAllArticles();
    return articles;
  })
  .listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

export default app;
