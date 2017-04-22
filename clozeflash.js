/**
 * Created by elenastaylor on 4/20/17.
 */
var fs = require('fs');
//Creates a ClozeFlash Constructor
var ClozeFlash = function(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};

ClozeFlash.prototype.displayCloze = function() {
    var clozeCard = this.text.replace(this.cloze, "...");
    return clozeCard;
    console.log(clozeCard);
};

//code for creating the new cloze flash card
ClozeFlash.prototype.writeCloze = function() {
    //write the user input to a separate text file
    fs.appendFile("cloze.txt", JSON.stringify(this), function(err) {
        if (err) {
            console.log(err);
        };
        console.log("New cloze card added to the cloze.txt file")
    });
};

ClozeFlash.prototype.findCloze = function() {
    var find = this.text.search(this.cloze);
    if (find !== -1) {
        this.writeCloze();
        this.displayCloze();
    } else {
        console.log("This doesn't work", "oops!")
    }
};


module.exports = { ClozeFlash };