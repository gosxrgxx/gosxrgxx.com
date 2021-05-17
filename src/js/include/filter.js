const filterList = document.querySelector('.filter__list');
const filterItem = document.querySelectorAll('.filter__item');
const projectsBlock = document.querySelectorAll('.projects__block');

function filter() {
	filterList.addEventListener('click', event => {
		const targetFilter = event.target.dataset.filter;

		if (event.target.classList.contains('filter__item')) {
			filterItem.forEach(listItem => listItem.classList.remove('filter__item--active'));
			event.target.classList.add('filter__item--active');
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
