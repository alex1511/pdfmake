#3. Assignment: Software Design#

##Introduction##
Software Architecture deals with the organization of the project's system, managing its components and the relationships between them.
Architechural Patterns are specific patterns that are often used when designing a system, that make solving recurring problems simpler.
In our best understanding, PDFmake uses a Client-Server pattern.
Since the project is a library, where its functions are kept in a server, when a client wants to use those functions they need to first access the server. Afterwards, the server returns a PDF to the client (via printer, download or in-browser), therefore establishing a necessary client-server relationship.

##c) Deployment View##

![Use Cases](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/Pdfmake_deployment.png)

##d) Process View##

![Use Cases](https://github.com/joaopedrofump/pdfmake-1/blob/master/ESOF-Docs/ProcessViewFinal.png)
