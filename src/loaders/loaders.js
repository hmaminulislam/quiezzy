import axios from "axios"

const loaderQuizData = async () => {
    const res = await axios.get(
      "https://openapi.programming-hero.com/api/quiz"
    );
    return res.data.data;
}

export default loaderQuizData;