#  Cashier Kiosk

## Project Structure

-   assets - All icons and images in project (preferable - inside this folder add new folders for pages if there are a lot of per page specific icons )
    
-   communication - Api functions divided into files by project parts (ex: account, auth, category, user)
    
-   components - Reusable component
    
-   constants - Constants used in multiple places
    
-   functions - Reusable functions
    
-   hooks - Reusable hooks
    
-   global - Define global style and color variables
    
-   libs - configured external libraries
    
-   pages - all available pages in project
    
-   routes - all available routes
    
-   store - global store (ex: modal) and all stores for specific section or functionality (ex: user data)
   
-  types  - Reusable types ( ex: communication)

## Reusable Components:

 - Button
 - Input
 - Select
 - Modal
 - Pagination
 - Drag and drop
 - Table
 - No items
 - Back button


## Hooks

 -   useResize - window resize
    
 -   useOnClickOutside - example: on outside click close dropdown menu
    
 -   useEnterKeyPress - function for handling enter press
    
 -   useFetch - used for data fetching
    
 -   useKeyPress -used for handling key press
    
 -   useTouchField - used for checking if field is touched and flagging field as touched
    
 -   useToggle - used for toggling (example modal,sidebar)
    
 -   validation hooks - Email, min length, max length,min value, max value,email, number
## External packages:
 - clsx
 - craco
 - react-datepicker
 - react-dropzone
 - react-loading-skeleton
 - react-paginate
 - react-router-dom
 - react-select
 - react-toastify
 - styled-components
 - zustand

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `yarn start`

 
Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 
The page will reload if you make edits.\

You will also see any lint errors in the console.


### `yarn build`

 
Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  
### `yarn eject`

 
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

 
If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.


Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.


You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
