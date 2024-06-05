import db from "~/db";

export interface Article {
  title: string;
  link: string;
  created_at: string;
}

export class ArticleRepository {
  static createTable() {
    db.run(`
      CREATE TABLE IF NOT EXISTS articles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        link TEXT NOT NULL,
        created DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }

  static insertArticles(articles: { title: string; link: string }[]) {
    const time = new Date().toISOString();
    const insert = db.prepare(
      `INSERT INTO articles (title, link, created) VALUES ($title, $link, $created)`,
    );
    const insertArticles = db.transaction((articles) => {
      for (const article of articles) {
        insert.run(article);
      }
      return articles.length as number;
    });

    const count = insertArticles(
      articles.map(({ link, title }) => ({
        $link: link,
        $title: title,
        $created: time,
      })),
    ) as number;

    return count;
  }

  static getAllArticles() {
    const instance = db.query<Article, []>(`
         SELECT * FROM articles;
         `);
    return instance.all();
  }
}
