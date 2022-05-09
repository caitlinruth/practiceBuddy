function getMeaning() {
    var word = document.getElementById('searchterm').value
    if (word === "scherzando") {
        document.getElementById("word").innerHTML = word;
        document.getElementById("meaning").innerHTML = "playfully (it)";
    }
    if (word === "ausdrucksvoll") {
        document.getElementById("word").innerHTML = word;
        document.getElementById("meaning").innerHTML = "with expression (de)";
    }
}