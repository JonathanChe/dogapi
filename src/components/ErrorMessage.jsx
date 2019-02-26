import React from 'react';
import styled from 'styled-components';

const types = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "bulldog",
  "bullterrier",
  "cairn",
  "cattledog",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "collie",
  "coonhound",
  "corgi",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "dane",
  "deerhound",
  "dhole",
  "dingo",
  "doberman",
  "elkhound",
  "entlebucher",
  "eskimo",
  "frise",
  "germanshepherd",
  "greyhound",
  "groenendael",
  "hound",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "mastiff",
  "mexicanhairless",
  "mix",
  "mountain",
  "newfoundland",
  "otterhound",
  "papillon",
  "pekinese",
  "pembroke",
  "pinscher",
  "pointer",
  "pomeranian",
  "poodle",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "retriever",
  "ridgeback",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "schnauzer",
  "setter",
  "sheepdog",
  "shiba",
  "shihtzu",
  "spaniel",
  "springer",
  "stbernard",
  "terrier",
  "vizsla",
  "weimaraner",
  "whippet",
  "wolfhound",
];

const Types = types.map(type => (
  <li
    name={type}
    key={type}
  >
    {type}
  </li>
));

const ErrorContainer = styled.div`
  overflow: scroll;
  height: 75%;
  width: 100%;
  text-align: center;
  color: white;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
    margin: 5%;
  }

  li {
    font-size: 1.75rem;
  }
`;

const ErrorMessage = ({ msg }) => (
  <ErrorContainer>
    <h1>{msg}</h1>
    <h3>Try Searching the following:</h3>
    <ul>
      {Types}
    </ul>
  </ErrorContainer>
)

export default ErrorMessage;
