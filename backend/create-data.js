let headers = ["Kid Age","Kid Gender","Kid Ethnicity","Kid Location", "Kid Hobbies", "Kid Health Conditions", "Kid Number of Siblings", "Kid Education", "Adult Age", "Adult Gender", "Adult Ethnicity", "Adult Location", "Adult Marital Status", "Adult Income", "Adult Occupation", "Adult Health Conditions", "Compatibility"].join("\t");

function randi(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
let num_of_samples = 1000;

let content = headers + "\n";

//TODO change
let ethnicities = ['African', 'African American', 'Arab', 'Asian', 'Caribbean', 'European', 'Hispanic/Latino', 'Indigenous', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian'];



for (let i = 0; i < num_of_samples; i++) {
    content += [randi(1, 18), randi(0,1), randi(1, ethnicities.length), randi(501, 99950), randi(1, 10), randi(1,10), randi(0,5), randi(1,4), randi(18, 90), randi(0,1), randi(1, ethnicities.length), randi(501, 99950), randi(0,1), randi(25750, 154500), randi(1,20), randi(1,10), randi(0,1)].join('\t') + '\n';
}

let fs = require("fs");

fs.writeFile("data.csv", content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
});