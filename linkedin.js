// import { elements } from "./likes";

// // масив з моїми контактами
// const contacts = [
//   "/in/pavlo-chubka-715b2621b/",
//   "/in/pavlo-chubka-715b2621b/",
//   "/in/oksana-zakharchuk-92450423a/",
//   "/in/oksana-zakharchuk-92450423a/",
//   "/in/anastasiia-ablieieva-bb2598273/",
//   "/in/anastasiia-ablieieva-bb2598273/",
//   "/in/f1x/",
//   "/in/f1x/",
//   "/in/yurii-skyba-1b8635134/",
//   "/in/yurii-skyba-1b8635134/",
// ];

// // Перевірка на унікальність посилань
// const uniqueContacts = Array.from(new Set(contacts));

// const links = document.querySelectorAll('a[href^="/in/"]');
// const linkList = [];
// for (let i = 0; i < links.length; i++) {
//   linkList.push(links[i].getAttribute("href"));
// }
// console.log(linkList);

// const pageSizeContacts = 20; // Розмір однієї сторінки
// const pageCountContacts = Math.ceil(uniqueContacts.length / pageSizeContacts); // Кількість сторінок

// for (let i = 0; i < pageCountContacts; i++) {
//   // Отримуємо частину масиву для даної сторінки
//   const pageContacts = uniqueContacts.slice(i * pageSizeContacts, (i + 1) * pageSizeContacts);

//   // Створюємо новий тег <p> з текстом інформаційного повідомлення та номером сторінки
//   const pageHeader = document.createElement("p");
//   pageHeader.textContent = `КОНТАКТИ. Частина ${i + 1} з ${pageCountContacts}`;

//   // Створюємо новий тег <p> з посиланнями
//   const pageLinks = document.createElement("p");
//   for (const element of pageContacts) {
//     const link = document.createElement("a");
//     link.href = "https://www.linkedin.com" + element;
//     link.target = "_blank"; // Додати атрибут target
//     link.textContent = "https://www.linkedin.com" + element; // Додати текстовий вміст
//     pageLinks.appendChild(link);
//     pageLinks.appendChild(document.createElement("br"));
//   }

//   // Додаємо створені теги до HTML-документу
//   document.body.appendChild(pageHeader);
//   document.body.appendChild(pageLinks);
// }



// пошук тих хто поставив лайки на пості
var linksLikes = document.querySelectorAll(
    'a[href^="https://www.linkedin.com/in/"]'
  );
  var linkListLikes = [];
  for (var i = 0; i < linksLikes.length; i++) {
    linkListLikes.push(linksLikes[i].getAttribute("href"));
  }
  console.log(linkListLikes);

// const elements = [
//   "https://www.linkedin.com/in/dmytrii-beresten",
//   "https://www.linkedin.com/in/ACoAAB3hrmcBlxx7sOkVw1r78otabBvz7yj8QYk",
//   "https://www.linkedin.com/in/ACoAACFszIsBacTcYMfEQvzjVU3pk-dDWTblrbI",
//   "https://www.linkedin.com/in/ACoAAD_iJw8B8eCqBr5Y7PCQ72VInkIZu48422k",
//   "https://www.linkedin.com/in/ACoAADe9hEUBrOOOBkigI47kwkc2l8HUOpEV5yA",
// ];

const pageSize = 20; // Розмір однієї сторінки
const pageCount = Math.ceil(elements.length / pageSize); // Кількість сторінок

for (let i = 0; i < pageCount; i++) {
  // Отримуємо частину масиву для даної сторінки
  const pageElements = elements.slice(i * pageSize, (i + 1) * pageSize);

  // Створюємо новий тег <p> з текстом інформаційного повідомлення та номером сторінки
  const pageHeader = document.createElement("p");
  pageHeader.textContent = `Люди які поставити лайк. Частина ${i + 1} з ${pageCount} (20 штук)`;

  // Створюємо новий тег <p> з посиланнями
  const pageLinks = document.createElement("p");
  for (const element of pageElements) {
    const link = document.createElement("a");
    link.href = element;
    link.target = "_blank"; // Додати атрибут target
    link.textContent = element;
    pageLinks.appendChild(link);
    pageLinks.appendChild(document.createElement("br"));
  }

  // Додаємо створені теги до HTML-документу
  document.body.appendChild(pageHeader);
  document.body.appendChild(pageLinks);
}

















// ПОШУК ПО КЛАСУ

// var likes = document.getElementsByClassName("artdeco-entity-lockup__title");
// var likeList = [];
// for (var i = 0; i < likes.length; i++) {
//   likeList.push(likes[i].innerText);
// }
// console.log(likeList);

// [
//     "Дмитро Берестень",
//     "Andrii Dzudzylo\nПереглянути профіль учасника Andrii Dzudzylo",
//     "Tetiana Kulbaba\nПереглянути профіль учасника Tetiana Kulbaba",
//     "Viktoria Murzhak\nПереглянути профіль учасника Viktoria Murzhak",
//     "Mariia Savchyn\nПереглянути профіль учасника Mariia Savchyn",
//     "Yaroslav Illiashenko\nПереглянути профіль учасника Yaroslav Illiashenko",
//     "Iryna Zozulya\nПереглянути профіль учасника Iryna Zozulya",
//     "Ігор Ярешко\nПереглянути профіль учасника Ігор Ярешко",
//     "Iryna Tymo\nПереглянути профіль учасника Iryna Tymo",
//     "Serhii Miroshnychenko\nПереглянути профіль учасника Serhii Miroshnychenko",
//     "Kateryna Panchenko\nПереглянути профіль учасника Kateryna Panchenko",
//     "Вікторія Ондовчик\nПереглянути профіль учасника Вікторія Ондовчик",
//     "Polina Krasovska\nПереглянути профіль учасника Polina Krasovska",
//     "Kateryna Syntech\nПереглянути профіль учасника Kateryna Syntech",
//     "Александр Гайдук\nПереглянути профіль учасника Александр Гайдук",
//     "Ivan Korobka\nПереглянути профіль учасника Ivan Korobka",
//     "Yuliia Koriavets\nПереглянути профіль учасника Yuliia Koriavets",
//     "Natalya Drozd\nПереглянути профіль учасника Natalya Drozd",
//     "Vladyslav Shumkov\nПереглянути профіль учасника Vladyslav Shumkov",
//     "Yulia Rudenko\nПереглянути профіль учасника Yulia Rudenko",
//     "Viacheslav Kovryzhnykh\nПереглянути профіль учасника Viacheslav Kovryzhnykh",
//     "Yevhenii Maslak\nПереглянути профіль учасника Yevhenii Maslak",
//     "Iryna Fedunyshy\nПереглянути профіль учасника Iryna Fedunyshy",
//     "Ivan Zozulia\nПереглянути профіль учасника Ivan Zozulia",
//     "ILLIA SHULHA\nПереглянути профіль учасника ILLIA SHULHA",
//     "Eduard Sekan\nПереглянути профіль учасника Eduard Sekan",
//     "Denys Havryliak 🇺🇦\nПереглянути профіль учасника Denys Havryliak 🇺🇦",
//     "Maksym Chepur\nПереглянути профіль учасника Maksym Chepur",
//     "Alla Honcharova\nПереглянути профіль учасника Alla Honcharova",
//     "Vitalii Horodetskyi\nПереглянути профіль учасника Vitalii Horodetskyi"
// ]



// ГЛИБОКИЙ ПОШУК ПО КЛАСУ
// [
//     "Дмитро Берестень\nTrainee Frontend Developer",
//     "Andrii Dzudzylo\nПереглянути профіль учасника Andrii Dzudzylo\n \nПоза мережею\n· 1-й\nFront End developer at Micro Focus",
//     "Tetiana Kulbaba\nПереглянути профіль учасника Tetiana Kulbaba\n \nПоза мережею\n· 1-й\nLooking for self-development on interesting position",
//     "Viktoria Murzhak\nПереглянути профіль учасника Viktoria Murzhak\n \nПоза мережею\n· 1-й\nFrontend Developer | HTML, CSS/SASS, JavaScript, React, React Native, Node.js",
//     "Mariia Savchyn\nПереглянути профіль учасника Mariia Savchyn\n \nПоза мережею\n· 1-й\nJunior Frontend Developer",
//     "Yaroslav Illiashenko\nПереглянути профіль учасника Yaroslav Illiashenko\n \nПоза мережею\n· 1-й\nFront-end Developer @ SKELAR",
//     "Iryna Zozulya\nПереглянути профіль учасника Iryna Zozulya\n \nПоза мережею\n· 1-й\nQA Specialist",
//     "Ігор Ярешко\nПереглянути профіль учасника Ігор Ярешко\n \nПоза мережею\n· 1-й\nмолодший веб-розробник",
//     "Iryna Tymo\nПереглянути профіль учасника Iryna Tymo\n \nПоза мережею\n· 1-й\nQA Engineer",
//     "Serhii Miroshnychenko\nПереглянути профіль учасника Serhii Miroshnychenko\n \nПоза мережею\n· 1-й\nPython Developer",
//     "Kateryna Panchenko\nПереглянути профіль учасника Kateryna Panchenko\n \nПоза мережею\n· 1-й\nFrontend developer (JavaScript, React, HTML5, CSS3)",
//     "Вікторія Ондовчик\nПереглянути профіль учасника Вікторія Ондовчик\n \nПоза мережею\n· 1-й\nUX/UI Designer",
//     "Polina Krasovska\nПереглянути профіль учасника Polina Krasovska\n \nПоза мережею\n· 1-й\nFull Stack Developer (HTML5, CSS3, JavaScript, React, Node.js)",
//     "Kateryna Syntech\nПереглянути профіль учасника Kateryna Syntech\n \nПоза мережею\n· 1-й\n🔥 Looking for an experienced IT Project Manager/Business Analyst",
//     "Александр Гайдук\nПереглянути профіль учасника Александр Гайдук\n \nПоза мережею\n· 1-й\nЗаместитель начальника – Управление транспортно-комуникационной инфраструктуры Одесской облгосадминистрации",
//     "Ivan Korobka\nПереглянути профіль учасника Ivan Korobka\n \nПоза мережею\n· 1-й\nFront-end Developer",
//     "Yuliia Koriavets\nПереглянути профіль учасника Yuliia Koriavets\n \nПоза мережею\n· 1-й\nFrontend developer (React, Node.js)",
//     "Natalya Drozd\nПереглянути профіль учасника Natalya Drozd\n \nПоза мережею\n· 1-й\nFront-End developer",
//     "Vladyslav Shumkov\nПереглянути профіль учасника Vladyslav Shumkov\n \nПоза мережею\n· 1-й\nSoftware developer (Full Stack MERN, Python)",
//     "Yulia Rudenko\nПереглянути профіль учасника Yulia Rudenko\n \nПоза мережею\n· 1-й\nJunior Fronted Developer",
//     "Viacheslav Kovryzhnykh\nПереглянути профіль учасника Viacheslav Kovryzhnykh\n \nПоза мережею\n· 1-й\nQA Engineer | QA Specialist | Software Testing Engineer",
//     "Yevhenii Maslak\nПереглянути профіль учасника Yevhenii Maslak\n \nПоза мережею\n· 1-й\nJunior Android Developer",
//     "Iryna Fedunyshy\nПереглянути профіль учасника Iryna Fedunyshy\n \nПоза мережею\n· 1-й\nUI/UX Designer 🇺🇦",
//     "Ivan Zozulia\nПереглянути профіль учасника Ivan Zozulia\n \nПоза мережею\n· 1-й\nJunior UI/UX Designer",
//     "ILLIA SHULHA\nПереглянути профіль учасника ILLIA SHULHA\n \nПоза мережею\n· 1-й\nFull Stack JavaScript Developer",
//     "Eduard Sekan\nПереглянути профіль учасника Eduard Sekan\n \nПоза мережею\n· 1-й\nJunior Full Stack Developer (JavaScript, React, Node.js)",
//     "Denys Havryliak 🇺🇦\nПереглянути профіль учасника Denys Havryliak 🇺🇦\n \nПоза мережею\n· 1-й\nSenior Mobile Developer",
//     "Maksym Chepur\nПереглянути профіль учасника Maksym Chepur\n \nПоза мережею\n· 1-й\nBusiness/System Analyst",
//     "Alla Honcharova\nПереглянути профіль учасника Alla Honcharova\n \nПоза мережею\n· 1-й\nFrontend Developer/React Developer",
//     "Vitalii Horodetskyi\nПереглянути профіль учасника Vitalii Horodetskyi\n \nПоза мережею\n· 1-й\nFront-end developer"
// ]