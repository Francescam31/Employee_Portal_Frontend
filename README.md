# Employee Portal - FRONT END React app 

# Setup Instructions 
Server-side API Instructions:

### Ensure the following are installed on your machine:

- Intellij IDEA (running with JDK 17)

## **_Collaborators_**

- Georgia Crawford-Dellar (GitHub: [GeorgiaCD](https://github.com/GeorgiaCD))
- Francesca (GitHub: [Francescam31](https://github.com/Francescam31))
- Amélie (GitHub: [amelieboydshire](https://github.com/amelieboydshire))
- Blezzy Dela Cruz (GitHub: [blezzydcruz](https://github.com/blezzydcruz))


### Table of Contents

1. [Description](#description)
2. [The app's functions](#the-apps-functions-functionalities)
3. [Components & Container Description](#components--container-description)
4. [Components Diagram](#components-diagram)
5. [Wireframe](#wireframe)
6. [API](#api)
7. [Demo video](#demon-video)
8. [Screenshots](#screenshots)
9. [Tech Stack](#tech-stack)

## Description

This project aimed to solve the inefficient record handling and the data discrepancies the company had by creating a full-stack application. 

We were given a buisness case and decided to solve the two following problems the company faced : 
1. Employee details are kept in paper records at head office
2. Separate diaries are used to keep track of holidays, changes in assignment and other important dates

Our solution was to built a multiple functional employee portal that aims to digitises employees records and schedules. In additon to viewing and editing their schedule employees have the ability to view shift history, view their projected earning for the current month and have a directory that displayed the contact details of the other employees in their department. 

## The app's functions/ functionalities

<ul>
<li> Login form with user authentication</li>
<li> Profile section that displays the properties of the employee </li>
<li> Calendar prepopulated with shift events from the API</li>
<li> Form to post shifts to the API and therefore the calendar</li>
<li> List that displays shits in the past </li>
<li> Current months predicted earnings based of the amount of shifts and the pay of the employee</li>
<li> List of other employees in that department with a modal which displays contact details</li>
<li> Dark/light mode button</li>
<li> Sidebar modal </li>
<li> Log out buttons that navigate you to the log in page </li>

</ul>


<hr>

## Components & Container Description 



### Components Diagram
<img src="./diagrams/capstone-COMPONENTS.png"></img>



### Wireframes
<img src="./diagrams/capstone-WIREFRAME.png"></img>

<div style="width: 70%; height:50%; overflow: hidden;">
<img src="./diagrams/wireframe.png"></img>
</div>

### API

https://github.com/GeorgiaCD/Employee_Portal_Backend

## Demo video

## Screenshots
<h4>Login Page</h4>
<img src="./diagrams/login-screenshot.png"></img>

<h4>Portal Page</h4>
<div style="width: 100%;  overflow: hidden;">
<img src="./diagrams/page1-screenshot.png"></img>

<img src="./diagrams/page2-screenshot.png"></img>
</div>
<h4>Employee Detail Modals</h4>
<h4>Light Mode</h4>
<div style="width: 50%; height:30%; overflow: hidden;">
<!-- <img src="./diagrams/modal-screenshot-light.png"></img> -->

<h4>Dark Mode</h4>
<!-- <img src="./diagrams/modal-screenshot-dark.png"></img> -->
</div>


# Tech Stack
### React
React libraries 
- react-router-dom
- react-big-calendar
- react-icons
- ionicons
