/* STEP 3: CRAZY BUTTONS
Aim: Create a button that moves whenever a user tries to hover over the button

| ./crazy-buttons.html |

[ ] Build out the HTML
Create a section which contains a button of type button
<!-- * MAIN CONTENT * -->
<main class="container">
	<h1>Crazy Buttons!</h1>

	<section>
		<button type="button" class="btn crazy-button">Can You Click Me?</button>
	</section>
</main>

| ./crazy-buttons.js |

[ ] Establish the Element Selectors
Create a variable crazyButton that stores a reference to the HTML button
// * ========== HTML Element Selectors ========== * \\
const crazyButton = document.querySelector('.crazy-button');

[ ] Initiate the Event Listeners
Add an Event Listener to the "crazyButton" that calls a goBtnWild function on "mouseenter"
// * ========== Event Listeners ========== * \\
// EVENT LISTENER: Listens for the mouse to hover the "crazyButton" and calls "goBtnWild()"
crazyButton.addEventListener('mouseenter', goBtnWild);

[ ] Declare the Functions
Create the goBtnWild function
Get a random position inside of the user's window for height
Get a random position inside of the user's window for width
// * ========== Function Declarations ========== * \\
// FUNCTION: Gets a random position on screen and sets the button to that location
function goBtnWild() {
	const offsetTop = Math.random() * (window.innerHeight - crazyButton.clientHeight);
	const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);
}

[ ] Add Functionality
Use those offsets to change the style properties on the crazyBtn
// * ========== Function Declarations ========== * \\
// FUNCTION: Gets a random position on screen and sets the button to that location
function goBtnWild() {
	const offsetTop = Math.random() * (window.innerHeight - crazyButton.clientHeight);
	const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);

	crazyButton.style.top = offsetTop + 'px';
	crazyButton.style.left = offsetLeft + 'px';
}

Check: Ensure the button runs away from the mouse

Can you click the button? */

const crazyButtons = document.querySelectorAll('.btn-crazy');

crazyButtons.forEach(button => button.addEventListener('mouseenter', goBtnWild));

function goBtnWild() {
	const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
	const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);

	this.style.top = offsetTop + 'px';
	this.style.left = offsetLeft + 'px';
}