#Maintainability#

Our porject, PDFmake, only complies with 40% of the BetterCodeHub coding standards.
In terms of Product Metrics, the project fails to have meaningful unit test, while its units are very long and complex themselves. Plus, it suffers from code duplication and poor organisation (unbalanced components and unnecessarily big unit-interfaces).

##Analysability##
Regarding how easy is it to diagnose the system for deficiencies or to identify the parts that need to be modified.
The codebase is considerably small (65 man-months), however, the units and methods are kept long and complex, making it harder to analyse the code.

##Changeability##  
Regarding how easy or difficult is it to make adaptations to the system.
Nearly 40% of the code in this project is a duplicate, however, all that duplicate code only exists in one module, which is the main module pdfmake.js. Considering how the codebase is very loosely coupled, it will prove to not be very strenuous to make changes to the code.

##Stability## 
Regardin how easy or difficult is it to keep the system in a consistent state during modification.
Seeing as how the interfaces are kept almost small enough to meet the standards, and how organized all the modules are, we can infer that this project has a good rating when it comes to stability.

##Testability##
Regarding how easy or difficult is it to test the system after modification.
This project fails massively when it comes to testability, seeing as it doesn't have near as much test coverage as it should ideally have and seeing how large and complex its units are.

##Maintainability Conformance## 
How the system complies with standards or conventions regarding maintainability.
After a careful analysis, we can conclude that this project isn't well prepared to establish an acceptable degree of maintainabilty. As a way to improve, it is suggested that the developers change their approach to unit coding, in hopes of keeping them shorter, simpler and accompanied by more unit tests.