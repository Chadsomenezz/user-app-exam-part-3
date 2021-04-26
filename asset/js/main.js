let result1 = null;
document.addEventListener('DOMContentLoaded', () => {
	/**THIS IS THE SCRIPT PART OF THE NAVIGATION TO ENABLE THE HAMBURGER
	 * MENU OF THE NAVIGATION BAR**/

	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {

		// Add a click event on each of them
		$navbarBurgers.forEach( el => {
			el.addEventListener('click', () => {

				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle('is-active');
				$target.classList.toggle('is-active');

			});
		});
	}

	/** FOR FORM **/
	let country = document.getElementById("country");
	let gender_m = document.getElementById("gender_m");
	let gender_f = document.getElementById("gender_f");
	let form = document.getElementById("form");
	let tbody = document.getElementById("tbody");
	let empty = ``;

	form.addEventListener("change",(e)=>{

		if (gender_f.checked){
			fetch(`http://users.local/home/view_all?gender=female&country=${country.value}`)
				.then(response => response.json())
				.then( data => {
					tbody.innerHTML = empty;
					for( result of data){
						tbody.innerHTML += `
							<tr>
								<td>${result['id']}</td>
								<td>${result['name']}</td>
								<td>${result['age']}</td>
								<td>${result['gender']}</td>
								<td>${result['country']}</td>
								
							</tr>
						`;
					}
				});
		}
		if (gender_m.checked){
			fetch(`http://users.local/home/view_all?gender=male&country=${country.value}`)
				.then(response => response.json())
				.then( data => {
					tbody.innerHTML = empty;
					for( result of data){
						tbody.innerHTML += `
							<tr>
								<td>${result['id']}</td>
								<td>${result['name']}</td>
								<td>${result['age']}</td>
								<td>${result['gender']}</td>
								<td>${result['country']}</td>
								
							</tr>
						`;
					}
				});
		}
	})
});

//JAVASCRIPT PART


