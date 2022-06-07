
const populationCounter = (people, s, e) => {
    let maxPopulation = 0
    let counter = 0
    let res = 0
    for (let year = s; year <= e; year++) {
        let curPopulation = 0
        people.forEach(person => {
            if (person.birth >= year && person.death <= e) {
                curPopulation += 1
                res = year
            }
        })
        maxPopulation = Math.max(curPopulation, maxPopulation)
    }
    res
    maxPopulation
}

populationCounter([{ birth: 1951, death: 1989 }, { birth: 1941, death: 1970 }, { birth: 1955, death: 1976 }], 1941, 1976) 
