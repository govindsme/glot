function parseGlot(text) {
  const chapters = [];
  let current = null;
  const lines = text.split(/\r?\n/);
  for (const rawLine of lines) {
    const line = rawLine.replace(/\s+$/, "");
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const content = line.trim();
    const indent = line.length - line.replace(/^[\t ]+/, "").length;
    const hasIndent = /^[\t ]+/.test(line);
    if (hasIndent) {
      if (current) current.phrases.push(content);
    } else {
      current = { title: content, phrases: [] };
      chapters.push(current);
    }
  }
  return chapters;
}
