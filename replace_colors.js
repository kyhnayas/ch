
const fs = require("fs");
const path = require("path");

const dirs = ["components", "pages", "styles"];
const dirPaths = dirs.map(d => path.join(__dirname, d));

const replacements = [
  { regex: /cbbc99/gi, replacement: "000000" },
  { regex: /c0b596/gi, replacement: "333333" },
  { regex: /151a30/gi, replacement: "111111" },
  { regex: /282e3f/gi, replacement: "000000" },
  { regex: /ada282/gi, replacement: "666666" },
  { regex: /FFE600/gi, replacement: "666666" }
];

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith(".js") || fullPath.endsWith(".css")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      let original = content;
      for (const r of replacements) {
        content = content.replace(r.regex, r.replacement);
      }
      if (content !== original) {
        fs.writeFileSync(fullPath, content, "utf-8");
        console.log("Updated: " + fullPath);
      }
    }
  }
}

dirPaths.forEach(walkDir);
console.log("Done");

