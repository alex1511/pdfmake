#4. Assignment: Verification & Validation#

**Verification and validation** :

In software engineering , verification and validation (V &amp; V) is defined as the process of confirming that the application meets the requirements and customer specifications, and properly fulfills its purpose.

This process, as the name implies, it is divided into two parts, although they are complementary.

**Software verification:** The process of evaluating software to determine whether the products of a given development phase satisfy the conditions imposed at the start of that phase.

**Software validation** : The process of evaluating software during or at the end of the development process to determine whether it satisfies specified requirements.

##a) Software Testability and Reviews

**Software testability** :

Software testability is the degree to which a software artifact (i.e. a software system, software module, requirements- or design document) supports testing in a given test context. If the testability of the software artifact is high, then finding faults in the system (if it has any) by means of testing is easier.

The testability of software components (modules, classes) is determined by factors such as:

**Controllability** :

It determines the work it takes to set up and run test cases and the extent to which individual functions and features of the system under test can be made to respond to test cases.

In pdfmake the degree of controllability of test cases are high. For example; columnCalculator.js,printer.js can be controlled.

**Observability:**

It determines the work it takes to set up and run test cases and the extent to which the response of the system under test (SUT) to test cases can be verified.

In pdfmake all the test cases like printer.js,columnCalculator.js,fontProvider.js etc were working.

**Isolateability:**

It determines the degree to which the component under test (CUT) can be tested in isolation.

In pdfmake the degree of isolateability varies with every test cases.for example:                              printer.js has very less degree of dependency so it can be tested separatly.Although it too has some dependencies but they are very low and easily controllable.                                                                                  Test like docMeasure.js depend on styleContextStack.js so the degree of dependency is high.so,it is not feasible to test them separately.

**Separation of concerns:**

It determines the degree to which the component under test has a single, well defined responsibility.

In pdfmake the degree of responsibility of test is single and well definied, as for example;

documentContext.js:                                                                                                                                                             it keeps the page orientation fixed while moving to the next page.                                                    layoutBuilder.js:                                                                                                                                                               It gives maxmimum height option to text.                                                                                                           printer.js:                                                                                                                                                                             It prints the pdf on client side.

**Understandability:**

It determines the degree to which the component under test is documented or self-explaining.

In pdfmake some of the test cases are self-explaining while for some the understandability increases with the dependency. For example;                       printer.js is self-explaining, while docMeasure.js and styleContextStack.js have some dependency and are understandable when they are read together.

**Heterogeneity:**

It determines the degree to which the use of diverse technologies requires to use diverse test methods and tools in parallel.

In pdfmake the degree of heterogeneity is very less,still it uses one technology that is:                           Npm (node package manager):It is a package manager for JavaScript.

##b) Test Statistics and Analytics##

![](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/test-coverage.png)

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
