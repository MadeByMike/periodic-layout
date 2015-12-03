module.exports = function(data, aspect){

	// Get aspect ratio or default to 16x9
	aspect = typeof aspect !== 'undefined' ? aspect : '16x9';
	aspect = aspect.split("x");

	//Allow data with nested arrays
	var flatten = function(array) {
		return Array.isArray(array) ? [].concat.apply([], array.map(flatten)) : array;
	}
	data = flatten(data);

	// Get the number of rows and columns from the given aspect ratio and number of items
	var item_count = data.length;
	var rows = Math.ceil(Math.sqrt(item_count)*aspect[1]/aspect[0]);
	var cols = Math.ceil(Math.sqrt(item_count)*aspect[0]/aspect[1]);

	// This is a periodic table so we need some negative space, let's work out how much
	neg1 = cols - 2;
	neg2 = Math.floor(neg1/2);
	neg3 = Math.floor(neg1/2);

	// After adding negative space adjust the row count if required
	while(neg1+neg2+neg3+item_count > cols*rows){
		rows++;
	}

	// The final negative space at the end of the table is the total number of rows x cols
	// minus all the items and negative space already allocated (the remainder)
	neg4 = cols*rows - (neg1+neg2+neg3+item_count);


	// Initialise the layout array
	var layout = [];
	for (var r = 0; r < rows; r++) {
		layout[r] = [];
	}

	// Add negative space 1
	for (var n = 0; n < neg1; n++) {
		layout[0][1+n] = '';
	}

	// Add negative space 2
	for (var n = 0; n < neg2; n++) {
		layout[1][Math.ceil(neg2/4)+n] = '';
	}

	// Add negative space 3
	for (var n = 0; n < neg3; n++) {
		layout[2][Math.ceil(neg3/4)+n] = '';
	}

	// Add negative space 4
	for (var n = 0; n < neg4; n++) {
		layout[rows-1][((cols-(cols*rows-(neg1+neg2+neg3+item_count))))+n] = '';
	}

	// Loop over rows and columns adding from data top to bottom while preserving the negative space
	var i=0;
	for (var c = 0; c < cols; c++) {
		for (var r = 0; r < rows; r++) {
			if(layout[r][c] !== '' && typeof data[i] !== 'undefined'){
				layout[r][c] = data[i];
				i++;
			}
		}
	}
	// Return layout as nested array
	return layout;
};
