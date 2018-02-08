'use strict';

let data = [{
		'Name': 'Thor Walton',
		'Position': 'Developer',
		'Office': 'New York',
		'Age': '61',
		'Start Date': '2013/08/11',
		'Salary': '98.54'
	}, {
		'Name': 'Quinn Flynn',
		'Position': 'Support Lead',
		'Office': 'Edinburgh',
		'Age': '22',
		'Start Date': '2013/03/03',
		'Salary': '342'
	}, {
		'Name': 'Jennifer Acosta',
		'Position': 'Junior Javascript Developer',
		'Office': 'Edinburgh',
		'Age': '43',
		'Start Date': '2013/12/18',
		'Salary': '75.65'
	}, {
		'Name': 'Haley Kennedy',
		'Position': 'Senior MArketing Designer',
		'Office': 'London',
		'Age': '43',
		'Start Date': '2012/12/18',
		'Salary': '313.5'
	}, {
		'Name': 'Brielle Williamson',
		'Position': 'Integration Specialist',
		'Office': 'New York',
		'Age': '61',
		'Start Date': '2012/12/02',
		'Salary': '372'
	}, {
		'Name': 'Michael Silva',
		'Position': 'Marketing Designer',
		'Office': 'London',
		'Age': '66',
		'Start Date': '2012/11/27',
		'Salary': '198.500'
	}, {
		'Name': 'Bradley Greer',
		'Position': 'Software Engineer',
		'Office': 'London',
		'Age': '41',
		'Start Date': '2012/10/13',
		'Salary': '132'
	}, {
		'Name': 'Dia Rios',
		'Position': 'Personnel Lead',
		'Office': 'Edinburgh',
		'Age': '35',
		'Start Date': '2012/09/26',
		'Salary': '217.5'
	}, {
		'Name': 'Herrod Chandler',
		'Position': 'Sales Assistant',
		'Office': 'San Francisco',
		'Age': '59',
		'Start Date': '2012/08/06',
		'Salary': '137.5'
	}, {
		'Name': 'Zorita Serrano',
		'Position': 'Software Engineer',
		'Office': 'San Francisco',
		'Age': '56',
		'Start Date': '2012/06/01',
		'Salary': '115'
	}, {
		'Name': 'Thor Walton',
		'Position': 'Developer',
		'Office': 'New York',
		'Age': '61',
		'Start Date': '2013/08/11',
		'Salary': '98.54'
	}, {
		'Name': 'Quinn Flynn',
		'Position': 'Support Lead',
		'Office': 'Edinburgh',
		'Age': '22',
		'Start Date': '2013/03/03',
		'Salary': '342'
	}, {
		'Name': 'Jennifer Acosta',
		'Position': 'Junior Javascript Developer',
		'Office': 'Edinburgh',
		'Age': '43',
		'Start Date': '2013/12/18',
		'Salary': '75.65'
	}, {
		'Name': 'Haley Kennedy',
		'Position': 'Senior MArketing Designer',
		'Office': 'London',
		'Age': '43',
		'Start Date': '2012/12/18',
		'Salary': '313.5'
	}, {
		'Name': 'Brielle Williamson',
		'Position': 'Integration Specialist',
		'Office': 'New York',
		'Age': '61',
		'Start Date': '2012/12/02',
		'Salary': '372'
	}, {
		'Name': 'Michael Silva',
		'Position': 'Marketing Designer',
		'Office': 'London',
		'Age': '66',
		'Start Date': '2012/11/27',
		'Salary': '198.500'
	}, {
		'Name': 'Bradley Greer',
		'Position': 'Software Engineer',
		'Office': 'London',
		'Age': '41',
		'Start Date': '2012/10/13',
		'Salary': '132'
	}, {
		'Name': 'Dia Rios',
		'Position': 'Personnel Lead',
		'Office': 'Edinburgh',
		'Age': '35',
		'Start Date': '2012/09/26',
		'Salary': '217.5'
	}

]

class Table {
	constructor(data) {
		this.data = data;
		this.numRows = 10;
		this.num = Math.ceil(this.data.length / this.numRows);
	}
	drawTableHeader(table) {
		let tr = document.createElement('tr');
		table.appendChild(tr);

		let col = 1;
		for (let item in this.data[0]) {
			let th = document.createElement('th');
			th.setAttribute('data-col', col++);
			let i = document.createElement('i');
			tr.appendChild(th);
			th.textContent = item;
			th.appendChild(i);
			i.className = 'fas fa-sort';
		}
	}
	drawRow(table, start = 0, finish = 9) {
		for (let item = start; item <= finish; item++) { //this.data
			let tr_body = document.createElement('tr');
			table.appendChild(tr_body);
			tr_body.setAttribute('key', item);
			let col = 1;
			for (let property in this.data[item]) {
				let td = tr_body.appendChild(document.createElement('td'));
				td.setAttribute('data-col', col++);
				td.textContent = property === 'Salary' ? `$ ${(+(this.data[item][property])).toFixed(3)}` : this.data[item][property];
			}
		}
	}
	drawTable(main) {
		let div = document.createElement('div');
		div.className = 'table';
		main.appendChild(div);

		let table = document.createElement('table');
		div.appendChild(table);

		this.drawTableHeader(table);
		this.drawRow(table);
	}
	drawPagination(main, num, focus) {
		let pagination = document.createElement('div');
		pagination.className = 'pagination';
		main.appendChild(pagination);

		let prev = document.createElement('button');
		prev.textContent = 'Previous';
		prev.classList.add('noactive');
		prev.classList.add('prev');
		pagination.appendChild(prev);

		for (let i = 1; i <= num; i++) {
			let button = document.createElement('button');
			button.textContent = i;
			button.setAttribute('key', i);
			if (i !== focus) {
				button.classList.add('noactive');
			} else {
				button.classList.add('active');
			}
			pagination.appendChild(button);
		}

		let next = document.createElement('button');
		next.textContent = 'Next';
		next.classList.add('next');
		next.classList.add('noactive');
		pagination.appendChild(next);
	}
	print() {
		let main = document.createElement('div');
		main.className = 'main';
		document.body.appendChild(main);

		let filter = document.createElement('div');
		let lableFilter = document.createElement('lable');
		let inputFilter = document.createElement('input');
		let buttonFilter = document.createElement('button');

		filter.className = 'filter';
		lableFilter.textContent = 'Search: ';
		buttonFilter.textContent = 'Search';

		main.appendChild(filter);
		filter.appendChild(lableFilter);
		filter.appendChild(inputFilter);
		filter.appendChild(buttonFilter);

		this.drawTable(main);
		this.drawPagination(main, this.num, 1)
	}
}

const inf = new Table(data);
inf.print();

function removeRows(table) {
	Array.from(document.querySelectorAll('tr:nth-child(n+2)')).forEach((item) => {
		table.removeChild(item);
	})
}

function sort(e) {
	let elem = e.target.tagName !== 'TH' ? e.target.closest('th') : e.target;
	let text = elem.textContent;

	if (elem.querySelector('.fa-caret-down')) {
		inf.data.reverse();
	} else {
		inf.data = inf.data.sort(function (a, b) {
			if (text === 'Salary') {
				if (+a[text] > +b[text]) {
					return 1;
				}
				if (+a[text] < +b[text]) {
					return -1;
				}
				return 0;
			} else {
				if (a[text] > b[text]) {
					return 1;
				}
				if (a[text] < b[text]) {
					return -1;
				}
				return 0;
			}
		});
	}
	let table = document.querySelector('table');
	let pagination = document.querySelector('.pagination');
	removeRows(table);
	let iOld = table.querySelector('.fa-caret-down');
	if (iOld) {
		iOld.classList.remove('fa-caret-down');
		iOld.classList.add('fa-sort');
	}

	pagination.querySelector('button[key = "1"]').click();

	let col = elem.dataset.col;
	let td = table.querySelectorAll(`td[data-col = "${col}"]`);

	let i = elem.querySelector('.fa-sort');
	i.classList.remove('fa-sort');
	i.classList.add('fa-caret-down');
	Array.from(td).forEach((item) => {
		item.classList.add('active');
	});
}

function removeCurr(curr, key, table) {
	inf.drawRow(table, (key - 1) * 10, key * 10 - 1);
	curr.classList.add('noactive');
	curr.classList.remove('active');
}

function checkRows(table) {
	if (table.querySelectorAll('tr').length > 1) {
		removeRows(table);
	}
}

function leaf(e) {
	let curr = document.querySelector('.pagination button.active');
	let key = e.target.getAttribute('key');
	let table = document.querySelector('table');
	if (curr !== e.target) {
		if (key) {
			checkRows(table);
			e.target.classList.remove('noactive');
			e.target.classList.add('active');
			removeCurr(curr, key, table);
		} else if (e.target.classList.contains('prev') && e.target.nextElementSibling !== curr) {
			checkRows(table);
			let prevS = curr.previousElementSibling;
			prevS.classList.remove('noactive');
			prevS.classList.add('active');
			key = prevS.getAttribute('key');
			removeCurr(curr, key, table);
		} else if (e.target.classList.contains('next') && e.target.previousElementSibling !== curr) {
			checkRows(table);
			let nextS = curr.nextElementSibling;
			nextS.classList.remove('noactive');
			nextS.classList.add('active');
			key = nextS.getAttribute('key');
			removeCurr(curr, key, table);
		}
	} else {
		if (table.querySelectorAll('tr').length <= 1) {
			inf.drawRow(table, 0, 9);
		}
	}
}

function listener() {
	document.querySelector('.table tr:first-child').addEventListener('click', sort);
	let pagination = document.querySelector('.pagination');
	if (pagination) {
		pagination.addEventListener('click', leaf);
	}
}

document.addEventListener('click', listener);

function search() {
	let rows = [];
	let inputText = searchInput.value;
	inf.data = data;
	if (inputText) {
		for (let item of inf.data) {
			let flag = false;
			for (let prop in item) {
				if (item[prop].toLowerCase().includes(inputText.toLowerCase())) {
					flag = true;
				}
			}
			if (flag) {
				rows.push(item);
			}
		}
		inf.data = rows;
	}

	let table = document.querySelector('table');
	if (table.querySelectorAll('tr').length > 1) {
		removeRows(table);
		document.querySelector('.pagination').remove();
	}

	if (document.querySelector('.tip')) {
		document.querySelector('.tip').remove();
	}
	if (inf.data.length) {
		inf.num = Math.ceil(inf.data.length / inf.numRows);
		inf.drawPagination(main, inf.num, 1);
		inf.drawRow(table, 0, 9);
		listener();
	} else {
		let tip = document.createElement('div');
		tip.textContent = 'По данному запросу ничего не найдено';
		tip.classList.add('tip');
		main.appendChild(tip);
	}
}

const main = document.querySelector('.main');

const filter = document.querySelector('.filter');
const searchButton = filter.querySelector('button');
const searchInput = filter.querySelector('input');

searchButton.addEventListener('click', search);