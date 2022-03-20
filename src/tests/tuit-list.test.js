import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

//according to piazza @279.
//jest.mock('axios');

const mock = jest.spyOn(axios, 'get');

mock.mockImplementation(() =>
    Promise.resolve({data: {users: MOCKED_USERS}}));

mock.mockRestore();

const MOCKED_USERS = [
    {username:"Jinx", password: "Jinx123", email: "Jinx@gmail.com"},
    {username: "Jhin", password: "Jhin123", email: "Jhin@gmail.com"},
    {username: "Akali", password: "Akali123", email: "Akali@gmail.com"}
];

const MOCKED_TUITS = [
    {_id: "62184c032eb449f9c82c1ed4", tuit: "Jinx's tuit", postedBy: ""},
    {_id: "62184c059eb449f9c82c1ed4", tuit: "Jhin's tuit", postedBy: ""},
    {_id: "62184c059eb332f9c82c1ed4", tuit: "Akali's tuit", postedBy:""}
];

test('tuit list renders static tuit array', () => {
  // TODO: implement this
  render(
      <HashRouter>
        <Tuits tuits = {MOCKED_TUITS}/>
      </HashRouter>
  );
  const tuit = screen.getByText(/Jinx's tuit/i);
  expect(tuit).toBeInTheDocument();
});

test('tuit list renders async', async () => {
  // TODO: implement this
  const tuits = await findAllTuits();
  render(
      <HashRouter>
        <Tuits tuits = {tuits}/>
      </HashRouter>
  )
  const tuit = screen.getByText(/alice/i);
  expect(tuit).toBeInTheDocument(); 
})


