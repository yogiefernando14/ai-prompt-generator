const prompts = {

chatgpt: [

"Act as a professional web developer and create a modern responsive landing page using HTML, CSS, and JavaScript.",

"Act as a senior software engineer and explain this code in simple terms.",

"Create a complete roadmap to learn full stack web development in 6 months."

],

coding: [

"Build a responsive Todo App using HTML, CSS, and JavaScript.",

"Create a weather application using OpenWeather API.",

"Generate a dark mode portfolio website with smooth animations."

],

marketing: [

"Create a 30-day social media content plan for a startup.",

"Write a persuasive Facebook ad for a web development service.",

"Generate 10 viral TikTok content ideas for technology creators."

],

midjourney: [

"Modern futuristic city at night, cinematic lighting, ultra realistic, 8k.",

"Minimalist black and white workspace, clean aesthetic, photorealistic.",

"Cyberpunk character portrait, neon lights, detailed face, dramatic lighting."

]

};

const category = document.getElementById("category");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

generateBtn.addEventListener("click", () => {

const selected = category.value;

const list = prompts[selected];

const randomPrompt =
list[Math.floor(Math.random() * list.length)];

result.textContent = randomPrompt;

});

copyBtn.addEventListener("click", () => {

navigator.clipboard.writeText(result.textContent);

copyBtn.textContent = "Copied!";

setTimeout(() => {

copyBtn.textContent = "Copy Prompt";

}, 1500);

});
