# Xello-Assignment
Created a single page Angular app with simple routing that has one state/view. In it, place two buttons that when clicked, show a tooltip above the button with some text in it.

When button A is clicked, if button B’s tooltip is open it should close and vice versa - only one tooltip should be visible at a time. Either tooltip should close when clicked anywhere outside of it, but remain open if clicked inside. Either tooltip should close when ESC key is pressed.

Implementation
------------------------

Tooltip functionality should be written as a reusable component or directive. Please do not use any existing plugins.
You are encouraged to use the Angular CLI or a starter/seed project to save time scaffolding
You can organize the files/folders in any way
The reviewer should be able to run your solution with a simple npm command
You should submit your solution as a github repository link


Bonus
-----------

If you scroll down to an open tooltip it should detect being at the edge of the screen and change position to be below the button +++

Style using either Bootstrap sass or SCSS BEM ++ -> Completed

Add at least one accessibility feature +

Design and style the app so that it is responsive + -> Completed

Use NGRX for state management ++++



In order to run this application use the following commands after cloning:

cd Xello-Assignment/TooltipButtons

npm install --save-dev @angular-devkit/build-angular

ng serve -o
