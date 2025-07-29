
const arr = [1, 2, 3, 5, 7]

for (const num of arr) {
    // console.log(num);
    
}
const arr2 = ["lion", "monkey", "parrot", "elephant"]

for (const animals of arr2) {
    //console.log(animals);
    
}


// Map

const map = new Map
map.set('PK', 'Pakistan'),
map.set('USA', 'United States of America'),
map.set('UAE', 'United Arab Emirates'),
map.set('IND', 'India'),
map.set('FR', 'France')

for (const [countries, abbrivations] of map) {
    console.log(countries, ':-', abbrivations);
    
}