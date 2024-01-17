# Food Order Application

- Header
   - Logo
   - Nav Items
        - Online status
            - Would like to determine the current online status of the user.
        - Home
            - Homepage is the main or introductory page of a website that serves as the initial point of access and typically provides navigation to other sections of the site.
        - About
            - "About" section summarizes the website's purpose or provides information about the entity behind it.
        - FAQ
            - Frequently Asked Questions (FAQ) provide answers to common queries about a product, service, or topic.
        - Grocery
            - The grocery app contains no actual content; it's designed for the efficient handling of lazy loading, suspense, and fallbacks to  enhance performance and user experience.
        - Cart - Number of Items in cart
            - ADD items
            - DELETE items
            - CLEAR items
        - User Log in status
            - Display current user's login status.

- Body
    - Search bar with search button
        - Search restaurants by name or type and view results by clicking the search button.
    - Top Rated Resturants
        - Filter restaurants by rating (4+ rating).
    - Reset
        - Reset to the initial state with all restaurants.
    - RestaurantContainer ( contain restaurant fetch from live swiggy API)
        - RestaurantCard ( click and go to the Restaurent MENU)
            - Img
            - Name of Restaurant
            - Star Rating
            - cuisine
            - Cost
        - Restaurant MENU
            - List of item thats are available in perticular Restaurant
            - Divide according to Category
            - Item with 'Add' button for cart storage.
                - number of Item show on Header 

- Footer
    - Copy Right
    - Contact 
    - Legal
    - We deliver to




# React and js concept that use for create appliaction

- install packages for applications
    - npm init
    - npm install -D parcel
- Ignite our APP
    - npx parcel index.html(execute the pakage)
    - npm installing react
    - npm install react-dom
    - npm parcel build index.html
    - change script in pakage.json to start project through npm start command

- Props (js)
- What is config driven UI
- Optional chaining (JS)
- Map reduce (list and key)
    - key (1) unique
          (2) index
- Filter
- onclick ---> handler
- Import/export
    - by default
    - by named
- Monolith and Microservices architecture
- HOOKs
    - usestate Hook
        - state variable
        - Reconicilation Algo( React Fiber )
        - virtual Dom
        - Diff Algo
    - useEffect
        - promises
        - async await
        - fetch(power given by js engine) API and converty into json

- CORS 
- Shimmer UI
- Conditional Rendering (with ternary operator or conditional operator)
- onChange  ---> Handler

- Routing
   - npm install react-router-dom
   - createBrowseRouter
   - RouterProider
   - React error page
        - errorElement
        - useRouteError Hook
        - children route
            - outlet
    - types of routing
        - Client site routing
        - Server site routing
    - Dynamic routing
        - use id 
    - useParam HOOk

- custom HOOk
- Lazy loading = Chunking = Dynamic bundling = code spliting = On-demand loading = Dynamic Import
- Suspense
    - fallback

- High order Component
- Controlled and uncontrolled Component
- Lifting the State up 
- Props Drilling
- React Context

- Redux and Redux Toolkit
- react-redux-packge
- Redux store
    - Action/reducers
    - useSelector
    - useDispatch
- Redux Dev Toolkit

- React Testing Library
    - jest
        - Unit Testing
        - Intregation Testing





