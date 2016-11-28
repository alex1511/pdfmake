#3. Assignment: Software Design#

##Software Architecture and the 4+1 Architectual View Model##

Software architecture is the organization of the software system in its components and their relationship and communication between each other. The architecture therefore should be designed to fulfill all the functional and non functional requirements. Especially the non-functional requirements (e.g. maintainability, security etc.) are significantly influenced by the architecture design choices. In the overall software engineering process it is the first step in the design and implementation phase.

It is impossible to describe the system architecture of a software in one single model, since there are always different views on the system depending on different focus and stakeholders (e.g. if the model should be used for stakeholder communication, system analysis or system documentation). One popular framework, that tries to incorporate the most important views, is the 4+1 Architectual View Model. It uses the following 4 views on system architecture:

1. **Logical View:** Tries to capture the abstraction of the functionality of a system in classes, objects or packages. To capture this view we will use an UML package diagram.

2. **Development View:** Describes the system from a software developer's viewpoint. It therefore captures the software management, meaning the communication and relation between the software components. For this view, we will use an UML component diagram.

3. **Process View:** Captures the dynamics of the system, describing the processes and their communication and runtime relation. We will use an UML activity diagram for this view.

4. **Deployment View:** This view deals with the distribution of the software components to the different hardware components the system will use, and their communication between each other. We will use an UML deployment diagram for this.

5. **Scenarios / Use Cases:** The '+1' in the 4+1 model, describing the main use cases, which then link all the different views together. They are used to identify the architecture elements, explain them and validate them. Furthermore they can be used as starting point for architecture and implementation tests.


##Architectual Pattern of PDFmake##

Architectual patterns are specific patterns that have been proven to be successful architectual designs for common software solutions. Therefore variations of them are commonly used.
Looking at the src folder of PDFmake, we couldn't figure out the usage of an specific pattern, mostly due to a lack of documentation in most .js files. Furthermore PDFmake is not a typical software, it is more a JavaScript libary to enable .pdf printing (see readme.md & firstassignment.md), and is therefore hard to fit in the common software patterns.

But from our general understanding of PDFmake, we would suggest some variation of the 'Pipes and Filters' architecture. PDFmake generally processes data from an input, a HTML document with JavaScript commands and document data (like text, tables and styles), into an output, a .pdf file. This onedirectional, uninteractive data transformation process with stable datatypes (HTML -> PDF) encourages the usage of a 'Pipe and Filters' pattern, since it is easy to understand and adding further transformation functionalities is easy.


##Logical View##

![Logical View](https://github.com/joaopedrofump/pdfmake-1/blob/stefan/ESOF-Docs/PackageDiagram.jpg)


##Development View##
![Development View](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/Development%20view.PNG)


##Process View##

![Process View](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/ProcessViewFinal.png)


##Deployment View##

![Deployment View](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/Pdfmake_deployment.png)
