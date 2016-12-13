#4. Assignment: Verification & Validation#

##b) Test Statistics and Analytics##

- **Nr. of Test Cases:**
339 (281 passing / 58 pending)
- **Coverage:**
  - *Statements:* 3,90%
  - *Branches:* 0,00%
  - *Functions:* 0,00%
  - *Lines:* 3,99%
- **Nr. of Flaky Tests:** 0
- **Code Analysis:** Project Certification A (Codacy)
 - *Code Style* 66%
 - *Error Prone* 75%
 - *Unused Code* 99%
 - *Rest* 100%


To analyze the coverage, we installed the 'gulp-istanbul' plugin into the gulp file. We're sceptical about the validity of the coverage report, since it seems very low and says that branches and functions aren't covered at all. But we weren't able to identify any flaw in the installation, and couldn't make other plugins like 'gulp-coverage' to work.

To identify the Nr. of flaky tests, we ran the test for a total amount of 70 times, but couldn't see any variation of the results. This would hint to a flaky test, since then a test would produce random results because the code didn't change.
Maybe the sample size was too low, because flaky tests, especially in such a high test case number, are pretty common. Even Google's developers have a constant rate of 1,5% of flaky test results ([source](https://www.google.com)). An automatic integration in the CI envirionment on a seperate branch that would try to build the tests on a regular basis for some days would maybe give other insights.
