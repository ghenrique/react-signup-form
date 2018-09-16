
This project was create to Mirum Code Challenge

## Running the project

To start the project, please, clone the repository, go to *react-app* folder and run the following commands on the Terminal:
* yarn install
* yarn dev

## Project Structure
The project is using React. We are using Redux library together with [Axios](https://github.com/axios/axios) to make the API calls, and the form is built in the [Redux Form](https://redux-form.com/7.4.2/) structure.

To make the work easier, [Reactstrap](https://reactstrap.github.io/) was used to get variables, utilities, components and the grid system.

[React Router](https://reacttraining.com/react-router/) help us to navigate through the pages, creating the routes and rendering the components according to the configured route configured in the *router.js* file.


## Used Code Standards
To maintain an organized code, comments were added to the main opening and closing tags that aren't a component itself. This will help to maintain the code making it easier to identify which are the blocks that are closing and opening.

    {/* .my-block */}
    <section className="my-block">
    
	  </section>
	  {/* \ .my-block */}

## CSS Declarations Anatomy

 - One space before brackets opening;
 - Properties and values in the same row;
 - One space after the property opening (: );
 - The closing brackets should be in a new row and need to have a
   identifier comment;
 - Extends and Includes come first, right after the selector definition.
   The only include declaration that comes after the properties
   declaration are the breakpoints declarations;
 - One row between the properties declarations and
   extends/includes/modifiers;

## Class Naming

 - Class names should be in lowercase;
 - The class name words should be separated using dash (-);
 - Do not use **camelCase**;
 - Use the [**BEM Standard**](https://en.bem.info/methodology/naming-convention/) to name classes (block__element--modifier);

## BEM Standard
The BEM Standard divide classes in 3 groups: *block*, *element* and *modifier*.

*Block*
The component root.

*Element*
A component, part of the *block*.

*Modifier*
A variation or extension of the *element* or *block*.

    .head {}
    
	    .head__eye {}
    
	    .head__eye--brown {}
	    .head__eye--blue {}

As SASS started supporting BEM Standards, our class declarations would be like this:

    .head {
	    
	    &__eye {
		    &--brown {
			    color: brown;
		    } // &--brown
		    
		    &--blue {
			    color: blue
		    } // &--blue
	    } // &__eye
	    
    } // .head

