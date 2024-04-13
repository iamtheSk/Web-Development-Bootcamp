import React from "react";
import Card from "./Card";
import contacts from "../contacts";

// this function calls our component and provide attributes(props)
// and the value as json objects match to there props value
function createCard(contact) {
  return (
    <div>
      <Card
        key={contact.id} // it's refers to id of our objects and this is need to define
        id={contact.id} // i call again because key is a default props that not able to shown any value in our webpage,so i called diff name for this props and called the id value
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* for loop the element */}
      {/* using contacts.map() --> take a values and 
      iterate and provide to another fun that have our Card component and attributes */}
      {contacts.map(createCard)}

      {/* Instead of below this we create a dummy function 
      returns the card inside we give props and value 
      as objects in contacts file*/}

      {/* Simple call by props  */}
      {/* 
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
