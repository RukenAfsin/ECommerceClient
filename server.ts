import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
// SSR ile ilgili modüllerin kaldırılması veya yorum satırına alınması gerekiyor
// import { CommonEngine } from '@angular/ssr';
// import bootstrap from './src/main.server';
// import { APP_BASE_HREF } from '@angular/common';

// SSR ile ilgili yapılandırmaların kaldırılması veya yorum satırına alınması gerekiyor
// const commonEngine = new CommonEngine();

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // SSR ile ilgili yapılandırmaların kaldırılması veya yorum satırına alınması gerekiyor
  // server.get('*', (req, res, next) => {
  //   const { protocol, originalUrl, baseUrl, headers } = req;

  //   commonEngine
  //     .render({
  //       bootstrap,
  //       documentFilePath: indexHtml,
  //       url: `${protocol}://${headers.host}${originalUrl}`,
  //       publicPath: browserDistFolder,
  //       providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
  //     })
  //     .then((html) => res.send(html))
  //     .catch((err) => next(err));
  // });

  // SSR ile ilgili olmayan kodların burada kalması gerekiyor
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
