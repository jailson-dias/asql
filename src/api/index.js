import User from "./user";
import Exercise from "./exercise";
import Question from "./question";

const SERVER_URL = "https://pepulli.serveousercontent.com";

export const user = new User(SERVER_URL);
export const exercise = new Exercise(SERVER_URL);
export const question = new Question(SERVER_URL);

// const api = {
//   user,
//   exercise,
//   question,
// };

// export default api;
