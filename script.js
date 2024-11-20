const facts = [
    "I am 21 years old and full of youthful energy.",
    "I have a passion for mountains and enjoy exploring them.",
    "I love the tranquility and beauty of nature.",
    "I am adventurous and enjoy outdoor activities.",
    "I am always eager to learn and experience new things."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
