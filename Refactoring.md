# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
After reviewing the code and writing tests, I separated the code in 3 main sub tasks that I converted in methods:
- `extractCandidateFromEvent`
- `stringifyCandidate`
- `formatCandidate`

- Now it is easier to understand what the code does with just a read at the main method called `deterministicPartitionKey`, because it's literally calling each of the new 3 methods synchronously.
- Now it's possible to change or add steps to the process by just going to the specific method or adding a step in the main method.
- 4 more tests were written and monitored to be valid after each change.