import languageConfig from "./language.json";

const I18n =(keyword)=>{
    const language = localStorage.getItem("language") || "en";
    return languageConfig[language][keyword];
}
export default I18n;