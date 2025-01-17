/*
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the 
    following requirements:

        Use at least one array.
        Use at least two classes.
        Your menu should have the options to create, view, and delete elements.
*/

// Character Creation app

// Object creates a character by assigning a name, title, race and gender
class Character{
    constructor(name, title, race, gender) {
        this.name = name
        this.title = title
        this.race = race
        this.gender = gender
    }
}

// Menu object that creates the menu app
class Menu{
    constructor(){
        // Array containing all the characters the user creates
        this.characters = []
    }

    mainMenu(){
        return prompt(`
            Character Creation:

            0) Exit
            1) View All Characters
            2) Add Character
            3) Delete Character
            `);
    }

    start(){
        let selection = this.mainMenu();

        while (selection != 0) {
            switch(selection){
                
                case "1": this.viewCharacters();
                break;
            
                case "2": this.addCharacter();
                break;

                case "3": this.deleteCharacter();
                break;

                default: selection = 0;
            }
            selection = this.mainMenu();
        }
        alert(`Exiting Character Creation, 'til next time!`);
    }

    // Creates a new character
    addCharacter(){
        let newCharName = prompt("Enter Name");
        let newCharTitle = prompt("Enter Character Title");
        let newCharRace = prompt("Enter Race");
        let newCharGender = prompt("Enter Gender");
        this.characters.push(new Character(newCharName, newCharTitle, newCharRace, newCharGender));
    }

    deleteCharacter(){
        let charIndex = prompt(`Enter character index to DELETE:`);
        this.characters.splice(charIndex, 1);
    }

    viewCharacters(){
        let displayCharacters = "";
        for (let i = 0; i < this.characters.length; i++) {
            displayCharacters += `
            ${i}) Name: ${this.characters[i].name}, Title: ${this.characters[i].title}, Race: ${this.characters[i].race}, Gender: ${this.characters[i].gender} \n`;
        }

        alert(`Characters:\n \n${displayCharacters}`);
    }
}

let initMenu = new Menu;

initMenu.start();