const user = [
  {
    name: "Aarav Mehta",
    age: 25,
    designation: "Frontend Developer",
    description: "Passionate about crafting clean and responsive web interfaces using React and SCSS.",
    tag: "UI/UX Enthusiast",
    profilePhoto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Unnati Mishra",
    age: 23,
    designation: "Backend Developer",
    description: "Loves building robust APIs and working with Node.js and MongoDB to create scalable systems.",
    tag: "Code Ninja",
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Naitik Chitransh",
    age: 21,
    designation: "Full Stack Developer",
    description: "Enjoys turning ideas into functional web apps, blending creativity with logic.",
    tag: "Tech Explorer",
    profilePhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Tanvi Sharma",
    age: 24,
    designation: "UI Designer",
    description: "Designs minimal and elegant interfaces that focus on user experience and clarity.",
    tag: "Design Thinker",
    profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Rohan Verma",
    age: 26,
    designation: "Data Analyst",
    description: "Loves turning raw data into actionable insights using Python and Power BI.",
    tag: "Number Cruncher",
    profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Aditi Nair",
    age: 22,
    designation: "Content Strategist",
    description: "Crafts digital stories that connect users emotionally with brands.",
    tag: "Story Weaver",
    profilePhoto: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80"
  }
];


sum='';

var main= document.querySelector('main');
user.forEach(function(elem){
    // console.log(elem.name)
    sum+=`<div class="card">
            <img src=${elem.profilePhoto}alt="Pfp">
            <h2>${elem.name}</h2>
            <h4>${elem.designation}</h4>
            <p>${elem.description}</p>
        </div>`;
    
})

main.innerHTML= sum;

