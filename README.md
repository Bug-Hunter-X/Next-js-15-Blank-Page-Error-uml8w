# Next.js 15 Blank Page Bug

This repository demonstrates a common yet elusive bug in Next.js 15 applications where the page renders as a blank screen without any obvious errors in the console.  The issue stems from an unexpected interaction between React components and Next.js's rendering mechanism.

**Bug:** The provided `index.js` file, despite being a seemingly simple Next.js component, fails to render.  The browser displays a blank page, offering no error messages to guide debugging.  This can be particularly frustrating as there's no apparent syntax error or runtime exception.

**Solution:** The `index.solution.js` offers a workaround by introducing a simple change that prevents the bug. This highlights the sensitivity of Next.js 15's rendering process and the potential for seemingly innocuous code to trigger unexpected behaviour.