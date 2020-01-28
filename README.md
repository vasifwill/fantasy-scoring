# Fantasy Scoring

## Instructions
In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. Your task is to create a `calculateScore` function which will properly calculate the fantasy score for all known positions, returning 0 when the position is not one of the ones laid out below.

Working in a branch called `answer`, implement your function to get your tests to pass. Once you are done, push your branch up to GitHub, create a pull request, and request review from the instructor.

## Scoring Rules
* **QB:** 1 point for every 25 yards passing, 6 points for every passing touchdown, -3 points for every interception, 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble
* **RB:** 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble, 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble, 1 point for every 15 kick return yards, 6 points for every kick return touchdown, -3 points for every kick return fumble, 1 point for every 15 punt return yards, 6 points for every punt return touchdown, -3 points for every punt return fumble
* **WR:** 1 point for every 10 yards rushing, 6 points for every rushing touchdown, -3 points for every rushing fumble, 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble, 1 point for every 15 kick return yards, 6 points for every kick return touchdown, -3 points for every kick return fumble, 1 point for every 15 punt return yards, 6 points for every punt return touchdown, -3 points for every punt return fumble
* **TE:** 1 point for every reception, 1 point for every 10 yards receiving, 6 points for every receiving touchdown, -3 points for every receiving fumble
