import Tuits from "../components/tuits";
import {screen, render} from "@testing-library/react";
import {HashRouter} from "react-router-dom";
import {findAllTuits} from "../services/tuits-service";
import axios from "axios";

//jest.mock('axios');

const mock = jest.spyOn(axios, 'get');
mock.mockImplementation(() =>
    Promise.resolve({data: {users: MOCKED_USERS}}));

mock.mockRestore();  // restore original implementation

const MOCKED_USERS = [
    {username:"alice", password: "alice123", email: "alice@wonderland.com"},
    {username: "bob", password: "bob234", email: "bob@marley.com"},
    {username: "charlie", password: "snoopy", email: "charlie@peanut.com"}
];

const MOCKED_TUITS = [
    {_id: "123", tuit: "alice's tuit", postedBy: ""},
    {_id: "234", tuit: "bob's tuit", postedBy: ""},
    {_id: "345", tuit: "charlie's tuit", postedBy:""}
];

test('tuit list renders static tuit array', () => {
  // TODO: implement this
  render(
      <HashRouter>
        <Tuits tuits = {MOCKED_TUITS}/>
      </HashRouter>
  );
  const tuit = screen.getByText(/alice's tuit/i);
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


