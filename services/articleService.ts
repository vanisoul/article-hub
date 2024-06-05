import { ArticleRepository } from "~/repositories/articleRepository";
import type { Article } from "~/repositories/articleRepository";

export class ArticleService {
  static async fetchAndStoreArticles(apiUrl: string) {
    const response = await fetch(apiUrl);
    const data = await response.json() as { news: Article[] };

    // const data = [{ title: "title", link: "link" }];

    const articles = data.news.map((item) => ({
      title: item.title,
      link: item.link,
    }));

    const count = ArticleRepository.insertArticles(articles);
    return count;
  }

  static getAllArticles() {
    return ArticleRepository.getAllArticles();
  }
}
