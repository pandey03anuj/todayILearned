const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

// Selecting the DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

const factsList = document.querySelector(".facts-list");
factsList.innerHTML = "";

// Load data from Supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://rzvvvgxttgixxbcztjwa.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dnZ2Z3h0dGdpeHhiY3p0andhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NTAyNTUsImV4cCI6MTk5NDAyNjI1NX0.Pmqrj8HmZNqyYMtD6frew59PA-hiM9_gzAFgcIWtRak",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6dnZ2Z3h0dGdpeHhiY3p0andhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg0NTAyNTUsImV4cCI6MTk5NDAyNjI1NX0.Pmqrj8HmZNqyYMtD6frew59PA-hiM9_gzAFgcIWtRak",
      },
    }
  );

  const data = await res.json();

  // const filteredData = data.filter((fact) => fact.category === "technology"); // creates a new array for which the condition is true and return that array

  createFactsList(data);
}

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a class="source"
          href="${fact.source}"
          target="_blank">(Source)</a>
    </p>
    <span class="tag" style="background-color:${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  
    </li>`
  );
  const html = htmlArr.join("");

  factsList.insertAdjacentHTML("afterbegin", html);
  // factsList.insertAdjacentElement("afterbegin", html);
}

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
// const calcAge = (year) => 2022 - year;
// console.log(calcAge(1995));

// const fact = ["India is a green city", 2002, true];

// const [text, year, isCorrect] = fact;

// const newFact = [...fact, "society"]; // Unpacking by ...  (This creates a new array of size 4)
// console.log(newFact);

const factObj = {
  text: "India is a green city",
  year: 2002,
  isCorrect: true,
  category: "environment",

  createSummary: function () {
    return `The fact is "${
      this.text
    } from the category ${this.category.toUpperCase()}"`;
  },
};

//console.log(factObj.text);

const { category, year } = factObj; //retrieving from obj
// console.log(category);

//console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
  console.log(el);
});

// const timesTen = [2, 4, 6, 8].map(function (el) {
//   return el * 10;
// });

// console.log(timesTen);

const times10 = [2, 4, 6, 8].map((el) => el * 10); // Using arrow function
console.log(times10);
*/
