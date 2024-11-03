const fs = require("fs");
const guests = require("./guests.json");

guests.forEach((guest) => {
  const fileName = `thankyounotes/${guest.name}.txt`;

  let noteContents = "";

  if (guest.attended && guest.cash === false) {
    noteContents = `Dear ${guest.name}, \n\nWe are so happy you could be part of our wedding celebration. \n\nThank you so much for the ${guest.giftDescription}. We can't wait to use it for ${guest.giftReason}. \n\n${guest.personalMessage} \n\nWe hope you had a great time at the wedding, thank you again! \n\nLove Patrick and Lindsay`;
  }

  if (guest.attended && guest.cash) {
    noteContents = `Dear ${guest.name}, \n\nWe are so happy you could be part of our wedding celebration. \n\nThank you so much for the generous cash gift. We're getting settled into our new home as newlyweds, and plan on using it for some much needed improvements to make the home our own. \n\n${guest.personalMessage} \n\nWe hope you had a great time at the wedding, thank you again! \n\nLove Patrick and Lindsay`;
  }

  if (!guest.attended && guest.cash === false) {
    noteContents = `Dear ${guest.name}, \n\nWe're sorry you couldn't make it to the wedding, but we wanted to thank you for sending ${guest.giftDescription}. We can't wait to use it for ${guest.giftReason}. \n\n${guest.personalMessage} \n\nWe wish you could have been there to celebrate with us. \n\nLove Patrick and Lindsay`;
  }

  if (!guest.attended && guest.cash) {
    noteContents = `Dear ${guest.name}, \n\nWe're sorry you couldn't make it to the wedding, but we wanted to thank you for sending the generous cash gift. We're getting settled into our new home as newlyweds, and plan on using it for some much needed improvements to make the home our own. \n\n${guest.personalMessage} \n\nWe wish you could have been there to celebrate with us. \n\nLove Patrick and Lindsay`;
  }

  noteContents += `\n\n\n\n${guest.address}`;

  fs.writeFileSync(fileName, noteContents);
});
