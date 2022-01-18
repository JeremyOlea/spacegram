# Spacegram
- Created for [Shopify Front End Developer Intern Challenge - Summer 2022](https://docs.google.com/document/d/13zXpyrC2yGxoLXKktxw2VJG2Jw8SdUfliLM-bYQLjqE/edit#).
- A web app heavily inspired by instagram that uses the NASA Astronomy Picture of the Day API to upload a feed of daily photos taken by NASA.

## Try it out
Web page hosted on github pages: https://jeremyolea.github.io/spacegram/

## Features
### Required Features
:white_check_mark: Calls NASA API for photos.  
:white_check_mark: Each image result has **title**, **date**, and **like button**.  
:white_check_mark: Each image can be "liked" and "unliked".  
:white_check_mark: Served client-side and is accessible and semantic.  
![google lighthouse report](https://github.com/JeremyOlea/spacegram/blob/main/public/google-lighthouse-report.PNG)

### Additional Features
- Photos contain description field.
- Like button is styled to be heart icon and changes color to show state of being clicked.
- Added loading text while waiting for NASA API request.
- Infinite scrolling: loads 5 photos at a time and reaching the bottom of the page loads another 5 photos.

## Running Project Locally
### Requirements
- Must have [node.js and npm](https://www.pluralsight.com/guides/getting-started-with-nodejs) installed.

### Steps to run
1. [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or download repository.
2. Navigate to root folder of project in command line.
3. run `npm install` to install dependencies.
4. run `npm start` to run project.
5. Project should run on http://localhost:3000/spacegram.
