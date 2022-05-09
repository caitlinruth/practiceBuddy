const menucontainer = document.querySelector(".menucontainer")
const features = [
  { name: "keyboard", image: "images/piano.png" },
  { name: "planner", image: "images/planner.png" },
  { name: "metronome", image: "images/metronome.png" },
  { name: "translations", image: "images/journal.png" },
  { name: "dictionary", image: "images/book.png" },
  { name: "IPA guide", image: "images/letter-a.png" },
]

const showFeatures = () => {
    let output = ""
    features.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <a class"card--link" href="/tools/${name}.html">
                  <img class="card--avatar" src=${image} />
                  <h2 class="card--title">${name}</h2>
                  </a>
                </div>
                `)
    )
    menucontainer.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showFeatures)