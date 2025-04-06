const dotPosition = {
  1:[4],
  2:[0, 8],
  3:[0, 4, 8],
  4:[0, 2, 6, 8],
  5:[0, 2, 4, 6, 8],
  6:[0, 2, 3, 5, 6, 8]
};

function createDiceFace(dieElement, value) {
    dieElement.innerHTML = ''; // Clear the die element
  const position = dotPosition[value]; // Get the dot positions for the value
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div'); // Create a cell element 
    if (position.includes(i)) {
     const dot = document.createElement('div'); // Create a dot element
      dot.classList.add('dot'); // Add the 'dot' class to the dot element
      cell.appendChild(dot); // Append the dot to the cell
  }
    dieElement.appendChild(cell); // Append the cell to the die element
  }
}

function rollDice() {
    const die1 = document.querySelector('.die1'); // Select the first die element
    const die2 = document.querySelector('.die2'); // Select the second die element

    die1.classList.add('shake'); // Add the 'shake' class to animate the first die
    die2.classList.add('shake'); // Add the 'shake' class to animate the second die

    setTimeout(() => {
        die1.classList.remove('shake'); // Remove the 'shake' class after animation
        die2.classList.remove('shake'); // Remove the 'shake' class after animation

    const die1Value = Math.floor(Math.random() * 6) + 1;
    const die2Value = Math.floor(Math.random() * 6) + 1;
   
    createDiceFace(die1, die1Value); // Create the first die face
    createDiceFace(die2, die2Value); // Create the second die face
    },500);
}

rollDice(); // Initial roll of the dice



