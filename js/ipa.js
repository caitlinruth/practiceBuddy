const symbolbuttons = document.querySelectorAll('.symbolbutton');

symbolbuttons.forEach(symbolbutton => {
    symbolbutton.addEventListener('click', () => displayIPAInfo(symbolbutton))
})

function displayIPAInfo(symbolbutton) {
    const resultSymbol = document.getElementById(symbolbutton.dataset.symbol);
    document.getElementById("result-symbol").innerHTML = resultSymbol.dataset.unicode;
    document.getElementById("description").innerHTML = resultSymbol.dataset.description;
    document.getElementById("example-word").innerHTML = resultSymbol.dataset.example;
    resultSymbol.play();
}