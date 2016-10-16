#PDFMake#

##Brief Description##

This is a software written in javascript to enable client/server side based pdf printing directly from the browser. It has functionalities like printing paragraphs, tables, canvas and allows to define own styles and fonts, which you can use by fully declarative commands, which lets you design the document and its structure without having to worry about the x&y calculations.

We see the usecase and value of pdfmake rather for other 3rd party softwares to easily export documents in .pdf files rather than use it for personal usage. One example of 3rd party programs using pdfmake is the novel writing tool called Novlr.org. Moreover, in the readme of the project it is stated that many html5 apps use it for printing.

##Process Development##

The project is managed in an agile development approach. They are having a continous development & integration workflow, using 'Travis-CI' to easily validate and test the contributions. Looking at the release history, we can say that they are releasing on a sprint based schedule every 20 days / 1 month. Because of 'Travis-CI' we can assume that they as well use some kind of code standards.

##Critics, Opinions and Alternatives##

We believe this is the best approach for an open source kind of project because at every moment the tool needs to be ready to receive more functionalities from other contributors without messing up with the existing ones and this is not possible with a classical development process where a new functionality implies going back to beginning and testing everything again.

Moreover, especially because many 3rd party apps are using pdfmake, the requirements to the software can often change specifically for a new application. Therefore the agile, iterative approach with short cycle releases is superior in that volatile environment over a classic software engineering approach like the 'waterfall process', which has its strength in a static project with clear outcomes.

One problem we see with the management of the project is that they don't keep a product backlog. This way it's not possible for contributors to easily see what issues and functionalities are currently worked or have to be worked on. Therefore for example it could happen, that a contributor starts working on a issue that is already being developed.

Another problem we could point is the lack of communication in the project. Communication is stated as one of the core values in the XP manifest and is needed to ensure the development processes efficency and focus. But we see that, among the contributor, there are a few comments in a few issues.
