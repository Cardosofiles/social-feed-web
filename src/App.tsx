import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/126399807?v=4",
      name: "João Batista",
      role: "Web Development",
    },
    content: [
      { type: "paragraph" as const, content: "Fala galeraa 👋" }, // Usando "as const" para restringir o valor da string
      {
        type: "paragraph" as const,
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link" as const, content: "cardosofiles@outlook.com" }, // Também "as const" aqui
    ],
    publishedAt: new Date("2024-08-22 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat",
    },
    content: [
      { type: "paragraph" as const, content: "Fala dev 👋" },
      {
        type: "paragraph" as const,
        content:
          "Preparado(a) para a próxima edição do <nlw/>?  A partir de segunda as 19:00 fique ligado no site e no canal do YouTube da Rocketseat!",
      },
      { type: "link" as const, content: "diego@rocketseat.com.br" },
    ],
    publishedAt: new Date("2024-08-10 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
