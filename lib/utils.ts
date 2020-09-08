import matter, { GrayMatterFile } from 'gray-matter';
import marked from 'marked';
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import YAML from 'yaml';
import fs, { promises as fsPromises } from 'fs';
import path from 'path';

hljs.registerLanguage('python', python);

const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeForHTML(input) {
  return input.replace(/([&<>'"])/g, (char) => escapeMap[char]);
}

// Create your custom renderer.
const renderer = new marked.Renderer();
renderer.code = (code, lang) => {
  // Check whether the given language is valid for highlight.js.
  const validLang = !!(lang && hljs.getLanguage(lang));

  // Highlight only if the language is valid.
  // highlight.js escapes HTML in the code, but we need to escape by ourselves
  // when we don't use it.
  const highlighted = validLang
    ? hljs.highlight(lang, code).value
    : escapeForHTML(code);

  // Render the highlighted code with `hljs` class.
  return `<pre><code class="hljs ${lang}">${highlighted}</code></pre>`;
};

// Set the renderer to marked.
marked.setOptions({ renderer });

export async function readYamlFile<T>(filePath: string): Promise<T> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Yaml ${filePath} not found`);
  }

  const yamlString = await fsPromises.readFile(filePath, {
    encoding: 'utf-8',
  });

  const parsedObject = YAML.parse(yamlString) as T;

  return parsedObject;
}

export async function readFileFrontMatter<T>(filePath: string) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file ${filePath} not found`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const matterResult: GrayMatterFile<string> = matter(fileContents);

  return {
    ...matterResult.data,
  } as T;
}

export async function readMarkdownFile(filePath: string): Promise<any> {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file ${filePath} not found`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');

  // Use gray-matter to parse the post metadata section
  const matterResult: GrayMatterFile<string> = matter(fileContents);

  // Use remark to convert markdown into HTML string
  // const processedContent = await remark()
  //   .use(html)
  //   .process(matterResult.content);
  const processedContent = marked(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    ...matterResult.data,
    content: contentHtml,
  };
}

export async function getFileContents(
  filePath: string
): Promise<string | null> {
  if (fs.existsSync(filePath)) {
    return await fsPromises.readFile(path.join(filePath), {
      encoding: 'utf-8',
    });
  } else {
    return null;
  }
}
