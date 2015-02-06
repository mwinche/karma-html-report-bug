# karma-html-report-bug

> Module that demonstrates a [karma-coverage](https://github.com/karma-runner/karma-coverage) bug

## Steps to duplicate

After cloning this repo, from the root:

```bash
npm install
npm run working
```

This will open your browser with the coverage report, note that it currently has data. Now lets change from karma-coverage@0.2.7 to the current master build.

```bash
npm run bug
```

*Regression: you will note that now the coverage data is now gone.*

Feel free to pop open the package.json to see how I am setting up the bug. Checkout the code as well. It is pretty straightforward.

