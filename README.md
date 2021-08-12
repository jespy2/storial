![Storial Logo](public/storial-logo.png)
# Track Books You'd Like To Read 
## MVP

  - Offers basic CRUD functionality for tracking books user hears about and would like to read in the future.
  - Includes title, author and notes for each book tracked

## Stretch Features

In the future, I'd like to add the following:
  - Additional fields such as date entered and genre
  - Genre field that has preset options, but editable by user
  - Sorting books by field
  - Check box that removes book from library *to-read view* to *have-read view*
  - Add proper modals with branded styling instead of using alerts
  - Add testing

### Tech Stack
React, TailwindCSS, Node, Express, MongoDB

### Getting Started
After cloning onto your local directory, you will need to run npm install in both the client and server directories.  
Be sure you have [Mongo DB installed](https://docs.mongodb.com/manual/installation/) as well.

Once your dependencies are installed, you will need to open three terminals:
  1. **MongoDB** enter the following commands:

  - brew services start mongodb-community

  - brew services start mongosh

  - mongo

  - use books

  2. **Server**
    - npm run start
  3. **Client**
    - npm run start