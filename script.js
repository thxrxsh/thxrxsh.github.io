const binaryBackground = document.getElementById('binary-background');

const rowHeight = 24; 
const numRows = Math.floor(window.innerHeight / rowHeight);

for (let i = 0; i < numRows; i++) {
  const row = document.createElement('div');
  row.classList.add('binary-row');

  let binaryData = '';
  for (let j = 0; j < 200; j++) {
    binaryData += Math.random() > 0.5 ? '<i class="number">1</i>' : '<i class="number">0</i>';
  }

  const binarySpan1 = document.createElement('span');
  const binarySpan2 = document.createElement('span');
  const binarySpan3 = document.createElement('span');
  const binarySpan4 = document.createElement('span');
  binarySpan1.innerHTML = binaryData;
  binarySpan2.innerHTML = binaryData;
  binarySpan3.innerHTML = binaryData;
  binarySpan4.innerHTML = binaryData;

  row.appendChild(binarySpan1);
  row.appendChild(binarySpan2);
  row.appendChild(binarySpan3);
  row.appendChild(binarySpan4);

  binaryBackground.appendChild(row);
}
