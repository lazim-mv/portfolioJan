const fs = require("fs");
const https = require("https");
const path = require("path");

// Array of image URLs (manually copied from your component)
const imageUrls = [
    "https://devrajchatribin.com/skills/HTML.svg",
    "https://devrajchatribin.com/skills/CSS.svg",
    "https://devrajchatribin.com/skills/JavaScript.svg",
    "https://devrajchatribin.com/skills/TypeScript.svg",
    "https://devrajchatribin.com/skills/React.js.svg",
    "https://devrajchatribin.com/skills/Next.js.svg",
    "https://devrajchatribin.com/skills/Angular.svg",
    "https://devrajchatribin.com/skills/Redux.svg",
    "https://devrajchatribin.com/skills/Node.js.svg",
    "https://devrajchatribin.com/skills/Express.js.svg",
    "https://devrajchatribin.com/skills/MySQL.svg",
    "https://devrajchatribin.com/skills/MongoDB.svg",
    "https://devrajchatribin.com/skills/PostgreSQL.svg",
    "https://devrajchatribin.com/skills/Cypress.svg",
    "https://devrajchatribin.com/skills/Docker.svg",
    "https://devrajchatribin.com/skills/Firebase.svg",
    "https://devrajchatribin.com/skills/AWS.svg",
    "https://devrajchatribin.com/skills/GSAP.svg",
    "https://devrajchatribin.com/skills/FramerMotion.svg",
    "https://devrajchatribin.com/skills/Figma.svg",
    "https://devrajchatribin.com/skills/TailwindCSS.svg",
    "https://devrajchatribin.com/skills/GIT.svg",
];

const downloadImage = (url, destFolder) => {
    const fileName = path.basename(url);
    const filePath = path.join(destFolder, fileName);

    https.get(url, (response) => {
        if (response.statusCode !== 200) {
            console.error(`❌ Failed to download ${url}`);
            return;
        }

        const fileStream = fs.createWriteStream(filePath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
            fileStream.close();
            console.log(`✅ Downloaded: ${fileName}`);
        });
    });
};

const downloadAll = async () => {
    const folder = path.join(__dirname, "tech-logos");

    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }

    imageUrls.forEach((url) => downloadImage(url, folder));
};

downloadAll();
