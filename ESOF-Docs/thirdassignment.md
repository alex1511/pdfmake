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

Architectual Patterns are specific patterns that are often used when designing a system, that make solving recurring problems simpler.
In our best understanding, PDFmake uses a Client-Server pattern.
Since the project is a library, where its functions are kept in a server, when a client wants to use those functions they need to first access the server. Afterwards, the server returns a PDF to the client (via printer, download or in-browser), therefore establishing a necessary client-server relationship.


##Logical View##

![Logical View](https://github.com/joaopedrofump/pdfmake-1/blob/stefan/ESOF-Docs/PackageDiagram.jpg)


##Process View##

![Process View](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/ProcessViewFinal.png)


##Deployment View##

![Deployment View](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/Pdfmake_deployment.png)
