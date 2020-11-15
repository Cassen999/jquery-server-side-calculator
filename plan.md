REQUIRED
- You are going to be building a server-side calculator. The logic for the calculator **must** be implemented on the server. 
- Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (`=` button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.
- Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.
- Keep a historical record of all math operations and solutions on the server. Display a list of all previous calculations on the page when it loads using a GET request. Update the list when a new calculation is made.
    > NOTE: History should exist even after refreshing the page. It's expected that the history will go away after restarting the server. We'll talk about long term data storage next week.
    > Note: Do not use eval() to complete this assignment.

HTML
- [x] Create files
- [x] Create inputs for user
- [x] Create buttons
- [x] Add a history area to display operation history

LOGIC
- [] Capture button press for math operator
- function add input1 + input 2 return result

SERVER.JS
- [] 

BUTTONS
- on('click', add)

