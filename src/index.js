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
	el(tagName, attributes = {}, children = []) {
  		const element =  document.createElement(tagName);
  		if (typeof attributes === 'object') {
    		Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));  
  		}
  		if (typeof children === 'string') { 
     		 element.textContent = children; 
    	} 
  		else if (children instanceof Array) {     
    		children.forEach(child => {
    			if (typeof child === 'string') { 
		     		element.textContent = child; 
		    	} else {
    				element.appendChild(child); 
    			}
    		});
  		}
  		return element;
	}
	drawTableHeader(table) {
		let items = Object.keys(this.data[0]).map((property, id) => {
			return this.el('th', { 'data-col' : id }, [ 
				property, this.el('i', { 'class' : 'fas fa-sort' }) 
			]);
		});
		table.appendChild(this.el('tr', {}, items));
	}
	drawRow(obj, place) {
		return Object.keys(obj).map((property, id) => {
			return this.el('td', { 'data-col': id }, 
				property === 'Salary' ? `$ ${ Number(obj[property]).toFixed(3) }` : obj[property]
			);
		});
	}
	drawFixedNumRows(table, start = 0, finish = 9) {
		for (let item = start; item <= finish; item++) { 
			if (this.data[item]) {
				table.appendChild(this.el('tr', { 'key' : item }, this.drawRow(this.data[item])));
			}
		}
	}
	removeAllRows(table) {
		if (table.querySelectorAll('tr').length > 1) {
			Array.from(table.querySelectorAll('tr:nth-child(n+2)')).forEach((item) => {
				table.removeChild(item);
			});
		}
	}
	drawTable(main) {
		main.appendChild(this.el('div', { 'class' : 'table' }, [ this.el('table') ]));
		const table = main.querySelector('table');
		this.drawTableHeader(table);
		this.drawFixedNumRows(table);
	}
	removePagination() {
		const paginationBtn = document.querySelectorAll('.pagination button');
		if (paginationBtn) {
			paginationBtn.forEach(btn => {
				btn.remove();
			});
		}
	}
	drawPagination(tag, num = this.num, focus = 1) {
		let allButton = [];
		for (let i = 1; i <= num; i++) {
			allButton.push(this.el('button', {'key' : i, 'class' : i === focus ? 'active' : 'noactive' }, String(i)));
		}
		allButton.push(this.el('button', { 'class' : 'noactive next'}, 'Next'));
		allButton.unshift(this.el('button', { 'class' : 'noactive prev'}, 'Previous'));
		allButton.forEach(btn => {
			tag.appendChild(btn);
		})
	}
	drawFilter(main) {
		main.appendChild(this.el('div', { 'class' : 'filter' }, [
				this.el('lable', {}, 'Search: '),
				this.el('input'),
				this.el('button', {}, 'Search')
			]));
	}
	print(place = document.body) {
		const main = place.appendChild(this.el('div', { 'class' : 'main'}));
		this.drawFilter(main);
		this.drawTable(main);
		this.drawPagination(main.appendChild(this.el('div', { 'class' : 'pagination'})));
		this.listener(main);
	}
	changeClass(oldC, newC, tag) {
		if (tag) {
			tag.classList.remove(oldC);
			tag.classList.add(newC);
		}
	}
	changeSortedColStyles(table, elem) {		
		let col = elem.dataset.col;
		const td = table.querySelectorAll(`td[data-col = "${col}"]`);
		const i = elem.querySelector('.svg-inline--fa');
		const iOld = table.querySelector('.fa-caret-down');	

		this.changeClass('fa-caret-down', 'fa-sort', iOld);
		this.changeClass('fa-sort', 'fa-caret-down', i);
		
		Array.from(td).forEach((item) => {
			item.classList.add('active');
		});
	}
	sortTable(elem, table) {
		let text = elem.textContent;
		if (elem.querySelector('.fa-caret-down')) {
			this.data.reverse();
		} else {
			this.data = this.data.sort(function (a, b) {
				return  text === 'Salary' ? (
					Number(a[text]) < Number(b[text]) ? -1 : Number(a[text]) > Number(b[text]) ? 1 : 0
				) : (	
					a[text] < b[text] ? -1 : a[text] > b[text] ? 1 : 0
				)		
			});
		}
		return elem;
	}
	redraw(table, key = 1) {		
		this.removeAllRows(table);		
		this.drawFixedNumRows(table, (key - 1) * 10, key * 10 - 1);	
	}
	changeBtnPage(elem, curr) {
		this.changeClass('noactive', 'active', elem);
		this.changeClass('active', 'noactive', curr);
		return elem.getAttribute('key');
	}
	leaf(table, elem = document.querySelector('.pagination button[key = "1"]')) { 
		let curr = document.querySelector('.pagination button.active');
		if (curr !== elem) {			
			if (elem.getAttribute('key')) {
				return this.changeBtnPage(elem, curr);
			} else if (elem.classList.contains('prev') && elem.nextElementSibling !== curr) {
				let prevS = curr.previousElementSibling;
				return this.changeBtnPage(prevS, curr);
			} else if (elem.classList.contains('next') && elem.previousElementSibling !== curr) {
				let nextS = curr.nextElementSibling;
				return  this.changeBtnPage(nextS, curr);			
			}
		} 
	}
	addTip(main) {
		main.appendChild(this.el('div', { 'class' : 'tip' }, 'По данному запросу ничего не найдено'));
	}
	removeTip(main) {
		const tip = main.querySelector('.tip');
		if (tip) {
			tip.remove();
		}
	}
	search(table, pagination, main) {
		const input = document.querySelector('.filter input');
		let rows = [];
		let inputText = input.value;
		this.data = data;
		if (inputText) {
			this.data.forEach(item => {
				if (Object.values(item).some(prop => prop.toLowerCase().includes(inputText.toLowerCase()))) {
					rows.push(item);
				}
			});
			this.data = rows;
		}
		this.changeClass('fa-caret-down', 'fa-sort', document.querySelector('.fa-caret-down'));
		this.removePagination();
		this.removeTip(main);
		if (this.data.length) {
			this.num = Math.ceil(this.data.length / this.numRows);
			this.drawPagination(pagination);
		} else {
			this.addTip(main);
		}		
	}	
	/*redrawClickHeader(e) {		
		let elem = e.target.tagName === "TH" ? this.sortTable(e.target, this.table) : this.sortTable(e.target.closest('th'), this.table);
		this.leaf(this.table);
		this.redraw(this.table);
		this.changeSortedColStyles(this.table, elem);
	}*/
	/*redrawClickFilterBtn(e) {
		this.search(this.table, this.pagination, this.main);
		this.redraw(this.table);
	}*/
	/*redrawClickPagination(e) {
		this.redraw(this.table, this.leaf(this.table, e.target));
		let arrow = this.table.querySelector('.fa-caret-down');	
		if (arrow) {
			this.changeSortedColStyles(this.table, arrow.closest('th'));
		} 
	}*/
	listener(main) {
		this.main = main;
		this.table = main.querySelector('.table table');
		this.pagination = main.querySelector('.pagination');
		const tableHeader = this.table.querySelector('tr:first-child');
		const filterBtn = main.querySelector('.filter button');

		tableHeader.addEventListener('click', (e) => {
			let elem = e.target.tagName === "TH" ? this.sortTable(e.target, this.table) : this.sortTable(e.target.closest('th'), this.table);
			this.leaf(this.table);
			this.redraw(this.table);
			this.changeSortedColStyles(this.table, elem);
		});//this.redrawClickHeader.bind(this));

		filterBtn.addEventListener('click', (e) => {
			this.search(this.table, this.pagination, this.main);
			this.redraw(this.table);
		});//this.redrawClickFilterBtn.bind(this));

		this.pagination.addEventListener('click', (e) => {
			this.redraw(this.table, this.leaf(this.table, e.target));
			let arrow = this.table.querySelector('.fa-caret-down');	
			if (arrow) {
				this.changeSortedColStyles(this.table, arrow.closest('th'));
			} 
		});//this.redrawClickPagination.bind(this));
	}
}

const place = document.querySelector('.place');
const inf = new Table(data);
inf.print(place);