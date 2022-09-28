/*
The code will be available in Github in the following repository:
https://github.com/edugoncalvess/Project2CSIS3380-003Fall2022.git

*/



// Contacts array
let contacts = [];

// var numberOfPages
let numberOfPages = 0;

// Each page displays 10 contacts.
const numberOfContactsEachPage = 10;

// getting all list items inside the contact-list. we can use the items as a whole without having to break down each detail inside it.
// the logic for populating the array was taken from here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#array_from_a_nodelist
contacts = Array.from(document.querySelectorAll('ul.contact-list li'));

// defining the number of pages to create links.
numberOfPages = Math.ceil(contacts.length / numberOfContactsEachPage );



function createPageButtons() {
    let buttonsHTMLCode = "";

    buttonsHTMLCode += "</ul>";

    for (var i = 0; i < numberOfPages; i++) {
        let numberToBeDisplayed = i + 1;
        buttonsHTMLCode += "<li><a href=\"#\" onclick=\"contactsPagination(" + numberToBeDisplayed + ")\">" + numberToBeDisplayed + "</a></li>";
    }

    // displaying the links in the page
    document.querySelector( `.pagination`).innerHTML = buttonsHTMLCode;

    // calls the first page as default
    contactsPagination( 1 );

}


function contactsPagination(  selectedPage  = 1 ) {
    
    let currentPageContacts = "";

    // the number of contacts may differ in the last page, so we are goin to check
    if (selectedPage < numberOfPages) {

        for (var i = (( selectedPage - 1) * numberOfContactsEachPage); i < (selectedPage * numberOfContactsEachPage ); i++) {
        
            currentPageContacts += "<li class=\"contact-item cf\">" + contacts[i].innerHTML + "</li>";
        }
        
    } else { // for the las page, the max number is the array lengh -1

        for (var i = (( selectedPage - 1) * numberOfContactsEachPage); i < (contacts.length); i++) {
            currentPageContacts += "<li class=\"contact-item cf\">" + contacts[i].innerHTML + "</li>";
        }
    }
    document.querySelector( `.contact-list`).innerHTML = currentPageContacts;
}



//
createPageButtons();