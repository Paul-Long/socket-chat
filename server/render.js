const order = ['manifest', 'common', 'common-main', 'vendor', 'main'];

const toArray = (chunk) => {
  return Array.isArray(chunk) ? chunk : [chunk];
};

function getChunks(chunks, source) {
  let js = [], css = [];
  source.forEach(key => {
    let chunk = chunks[key] || [];
    chunk = toArray(chunk);
    chunk.forEach(path => {
      if (path.endsWith('.js')) {
        js.push(path);
      } else if (path.endsWith('.css')) {
        css.push(path);
      }
    });
  });
  return {js, css};
}

const render = (chunks) => {
  const {js = [], css = []} = getChunks(chunks, order);
  return `
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="theme-color" content="#000000">
  <link rel="shortcut icon" href="/favicon.ico">
  <title>Socket.IO Chat</title>
  ${css.map(path => `<link rel="stylesheet" href="/${path}" />`).join('\n') }
  </head>
  <body>
    <div id="app"></div>
    ${js.map(path => `<script src="/${path}"></script>`).join('\n')}
  </body>
</html>		
  `
};

exports['default'] = (req, chunks) => render(chunks);
module.exports = (req, chunks) => render(chunks);
