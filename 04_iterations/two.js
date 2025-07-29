// For in loop use for Objects

// for-in loop takes key of arrays

const lang = {
    JS: "Javascript",
    CPP: "C++",
    RB: "Ruby on Rails"
}

for (const key in lang) {
  // console.log(`${key} stands for ${lang[key]}`);
   
}


//for each loop

const coding = ["js", "ruby", "c++", "python"]

coding.forEach((items)=> {
    console.log(items);
    
})