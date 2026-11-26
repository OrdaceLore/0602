const HTML = "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n  <title>Hi iPad3</title>\n  <style>\n    html, body { height: 100%; margin: 0; }\n    body {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 100vh;\n      min-height: 100dvh;\n      background: #ffffff;\n      color: #111111;\n      font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    }\n    h1 {\n      margin: 0;\n      padding: 0 16px;\n      text-align: center;\n      font-size: clamp(3rem, 12vw, 12rem);\n      font-weight: 800;\n      line-height: 1;\n      letter-spacing: -0.03em;\n    }\n    @media (prefers-color-scheme: dark) {\n      body { background: #000000; color: #f5f5f5; }\n    }\n  </style>\n</head>\n<body>\n  <h1>Hi iPad3</h1>\n</body>\n</html>\n";
export default {
  fetch() {
    return new Response(HTML, { headers: { "content-type": "text/html; charset=utf-8" } });
  }
};
