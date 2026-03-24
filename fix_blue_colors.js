
const fs = require("fs");
const path = require("path");

const dirs = ["components", "pages", "styles"];
const dirPaths = dirs.map(d => path.join(__dirname, d));

const replacements = [
  // 272c3f is the blueish dark color used in header / footer / newsletter
  { regex: /272c3f/g, replacement: "000000" },
  // 151a30cc or similar transparent blues might be in the code
  { regex: /151a30cc/g, replacement: "222222cc" }
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

