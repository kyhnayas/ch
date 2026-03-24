
const fs = require("fs");
const path = require("path");

const dirs = ["components", "pages", "styles"];
const dirPaths = dirs.map(d => path.join(__dirname, d));

const replacements = [
  // #000000 is used where #cbbc99 (lighter gold) was. Make it white
  { regex: /#000000/g, replacement: "#ffffff" },
  // #333333 is used where #c0b596 (gold) was. Make it light gray
  { regex: /#333333/g, replacement: "#e5e7eb" }
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

