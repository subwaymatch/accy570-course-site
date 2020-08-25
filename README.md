# ACCY 570 Course Site

<a href="https://deepscan.io/dashboard#view=project&tid=10181&pid=13441&bid=226261"><img src="https://deepscan.io/api/teams/10181/projects/13441/branches/226261/badge/grade.svg" alt="DeepScan grade"></a>
<a href="https://www.codacy.com/manual/subwaymatch/accy570-course-site?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=subwaymatch/accy570-course-site&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/3d567c86733347cd91477a4191859cb7"/></a>

ACCY 570 Fall 2020 - Data Analytics Foundations for Accountancy (Section AD5, OD5)<br />
This site is only used for Park's section (AD5 & OD5).

Vercel Project - [https://vercel.com/subwaymatch/accy570](https://vercel.com/subwaymatch/accy570)

## Overview



## Local Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Browsers Support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Edge |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| >= 52 (Mar 2017)                                                                                                                                                                                                  | >= 57 (Mar 2017)                                                                                                                                                                                              | >= 11 (Sep 2017)                                                                                                                                                                                              | >= 44 (Mar 2017)                                                                                                                                                                                          | >= 16 (Oct 2017)                                                                                                                                                                                           |

- [WebAssembly](https://webassembly.org/) is used to integrate Python 3.8 runtime to the browser using [Pyodide](https://github.com/iodide-project/pyodide). Please check WebAssembly support in your browser at [https://caniuse.com/#feat=wasm](https://caniuse.com/#feat=wasm).
- ~~[Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) are used to run Python scripts in non-main threads. You need to use a browser that supports Web Workers. You can check the browser support at [https://caniuse.com/#feat=webworkers](https://caniuse.com/#feat=webworkers).~~ Due to a [maximum stack size issue](https://github.com/iodide-project/pyodide/issues/441) in Safari when loading Pyodide and Python packages in Safari, I'm no longer using workers to run Pyodide :disappointed_relieved:. This will freeze main UI when the browser is running Python code. Later plan is to use workers for Chrome/Firefox/Edge and main thread for Safari.

## Branches

`master` contains latest commits that may break. Commits to `production` are continuously deployed to [Vercel](https://vercel.com/).

![accy570-course-branches](https://user-images.githubusercontent.com/1064036/91170497-98bd8580-e69e-11ea-9af7-f04700039d2c.png)

## Deployment

![next-vercel-illustration](https://user-images.githubusercontent.com/1064036/89702608-860a2900-d908-11ea-83ad-aa228b4322ae.jpg)

[This site](https://accy570.org) is built with [Next.js](https://nextjs.org/) and is continuously deployed to [Vercel](https://vercel.com/).
