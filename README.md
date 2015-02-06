# karma-html-report-bug

> Module that demonstrates a [karma-coverage](https://github.com/karma-runner/karma-coverage) bug

## Step to duplicate

After cloning this repo, from the root:

```bash
npm install
karma start && open coverage/chrome/index.html
```

This will open your browser with the coverage report, note that it currently has data. Now lets change from karma-coverage@0.2.7 to the current master build.

```bash
npm link karma-coverage
karma start && open coverage/chrome/index.html
```

*Regression: you will note that now the coverage data is now gone.*
