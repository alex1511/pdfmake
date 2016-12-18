#4. Assignment: Software Maintenance / Evolution#

##b) Evolution Process Report##

In order to evolve a feature in PDFmake we decided to follow the following process:

![Evolution Process](https://github.com/joaopedrofump/pdfmake-1/blob/stefan/ESOF-Docs/evolution_process.PNG)

In the following the steps undertaken during this process and the results of each step are reported.

####1. Feature Identification####
To identify a feature to evolve, we took a look at the different functionalities of PDFmake, trying to find a feature that is more underdeveloped than the others. While features like table or column printing show a very high functionality, lists seem to be very limited. PDFmake only offers 2 different list styles, ordered lists (ol) and unordered lists (ul) and the ability to nest lists. While this is sufficient for basic usecases, one significantly important usecase is not covered with these functionalities: creating a table of content. It speaks for itself, that the ability of creating tables of content for documents is important, which is why we decided to implement this feature.

![Feature Evolution](https://github.com/joaopedrofump/pdfmake-1/blob/stefan/ESOF-Docs/feature_evolution.PNG)

####2. Understanding the lists functionalities from a user perspective####
In order to narrow down the inspection of source code, which is needed to identify the code we have to change, we first identified the necessary changes and requirements for the feature evolution on a more abstract level, not related to the actual code. Using the [PDFmake-playground](http://pdfmake.org/playground.html) we first figured out how list printing works with PDFmake for an user, to then derive ideas of how this could be implemented in the code.

In order to print a list, the user has to declare the style of the list (ol or ul) which are string arrays. Then he has to fill these arrays with the list contents. For example:

`ol: ['item 1', 'item 2', 'item 3']`

Will lead to:

1. item 1
2. item 2
3. item 3

Within this list, the user can implement other lists in order to create nested lists. For example:

`ol: [
				'item 1', {
					ul: [
					'subitem 1',
					'subitem 2',
          ]
        },
        'item 2',
        'item 3'
      ]`

Will lead to:
1. item 1
  - subitem 1
  - subitem 2
2. item 2
3. item 3

####2. Deriving code implications from the user perspective####

There must be a function which identifies which marker (ol or ul) is called and makes a another function call or case decision when the markers ol or ul are parsed, which takes the declared array as parameter. It makes the x,y calculations of the list items (note that sublists are always moved more to the right) and sets the list symbols according to the declared style (ol or ul) in the beginning of the strings. While with a unordered list, this symbol is always the same, at an ordered list the string attachment should be something like:
`index+1 + '. '`

####3. Identify and analyze code that has to be changed####
