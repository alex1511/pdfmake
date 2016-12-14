#4. Assignment: Software Maintenance / Evolution#

##b) Evolution Process Report##
####1. Feature Identification####
To identify a feature to evolve, we took a look at the different functionalities of PDFmake, trying to find a feature that is more underdeveloped than the others. While features like table or column printing show a very high functionality, lists seem to be very limited. PDFmake only offers 2 different list styles, ordered lists (ol) and unordered lists (ul) and the ability to nest lists. While this is sufficient for basic usecases, one significantly important usecase is not covered with these functionalities: creating a table of content. It speaks for itself, that the ability of creating tables of content for documents is important, which is why we decided to implement this feature.

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

There must be a function, which gets called when the token ol or ul is parsed, which takes the declared array as parameter. It makes the x,y calculations of the list items (note that sublists are always moved more to the right) and sets the list symbols according to the declared style (ol or ul) in the beginning of the strings. While with a unordered list, this symbol is always the same, at an ordered list the string attachment should be something like:
`index+1 + '. '`

####3. How a table of contents lists could be implemented####

To clarify what we mean with a table of content list style, we attached an example image:

The main difference in implementation between the other two list styles and the toc style is, that the function also has to know the 'list number' of the superlist (e.g. superlist number is 2., then the list number of the first item of the sublist has to be 2.1). Therefore a new kind of communciation has to be implemented for the toc style.
