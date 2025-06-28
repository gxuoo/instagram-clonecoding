// src/api/auth.js
export const mockLogin = async (username, password) => {
  // 실제 API 대신 mock 처리
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "test" && password === "1234") {
        resolve({ username: "test", token: "mocktoken123" });
      } else {
        reject(new Error("아이디 또는 비밀번호가 틀렸습니다."));
      }
    }, 1000);
  });
};
