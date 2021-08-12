const filterItems = document.querySelector('.filter__items');
const fiterButton = document.querySelectorAll('.filter__button');
const projectsBlock = document.querySelectorAll('.projects__block');

function filter() {
	filterItems.addEventListener('click', event => {
		const targetFilter = event.target.dataset.filter;

		if (event.target.classList.contains('filter__button')) {
			fiterButton.forEach(listItem => listItem.classList.remove('active'));
			event.target.classList.add('active');
		}

		switch(targetFilter) {
			case 'all':
				getNameFilter('projects__block');
				break;
			case 'personal':
			case 'freelance':
				getNameFilter(targetFilter);
				break;
		}
	})
}

filter();

function getNameFilter(nameFilter) {
	projectsBlock.forEach(item => {
		if (item.classList.contains(nameFilter)) {
			item.style.display = 'block'
		} else {
			item.style.display = 'none'
		}
	})
}
