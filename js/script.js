const eleGrid = document.querySelector('.grid');

for (let i = 0; i < 64; i++) {
	// eleGrid.innerHTML += '<div class="cell"></div>';

	const eleCell = document.createElement('div');
	eleCell.classList.add('cell');
	eleGrid.append(eleCell);

	eleCell.addEventListener('click', function () {
		this.classList.toggle('active')
	});
}