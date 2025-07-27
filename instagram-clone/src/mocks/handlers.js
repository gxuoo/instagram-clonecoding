// src/mocks/handlers.js
import { http } from "msw";
import { faker } from "@faker-js/faker";
import { API_ROUTES } from "../constants/api";

// 🔧 유저 생성 함수
const generateUser = (id) => ({
  id,
  username: faker.internet.userName().toLowerCase(),
  name: faker.person.fullName(),
  avatar: faker.image.avatar(),
  verified: faker.datatype.boolean(),
  desc: faker.lorem.words(3),
});

// 🔧 포스트 생성 함수
const generatePost = (id) => ({
  id,
  username: faker.internet.userName().toLowerCase(),
  avatar: faker.image.avatar(),
  verified: faker.datatype.boolean(),
  time: `${faker.number.int({ min: 1, max: 5 })}h`,
  location: faker.location.city() + ", " + faker.location.country(),
  image: `https://picsum.photos/470/470?random=${id}`,
  likes: faker.number.int({ min: 100, max: 9999 }).toLocaleString(),
  description: faker.lorem.sentence(),
  commentsCount: faker.number.int({ min: 10, max: 100 }),
});

// 🔧 스토리 생성 함수
const generateStory = (id) => ({
  id,
  username: faker.internet.userName().toLowerCase(),
  avatar: faker.image.avatar(),
});

export const handlers = [
  // 🔹 Stories API
  http.get(API_ROUTES.STORIES, () => {
    const stories = Array.from({ length: 7 }, (_, i) => generateStory(i + 1));
    return new Response(JSON.stringify(stories), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 🔹 Posts API
  http.get(API_ROUTES.POSTS, () => {
    const posts = Array.from({ length: 5 }, (_, i) => generatePost(i + 1));
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),

  // 🔹 Recommendations API
  http.get(API_ROUTES.RECOMMENDATIONS, () => {
    const recommendations = Array.from({ length: 5 }, (_, i) =>
      generateUser(i + 1)
    );
    return new Response(JSON.stringify(recommendations), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }),
];
