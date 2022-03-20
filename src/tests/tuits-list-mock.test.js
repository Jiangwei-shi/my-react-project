import Tuits from "../components/tuits";
import axios from "axios";
import {render, screen} from "@testing-library/react";
import {findAllTuits} from "../services/tuits-service";
import {HashRouter} from "react-router-dom";

jest.mock('axios');

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

test('tuit list renders mocked', async () => {
    axios.get.mockImplementation(() =>
        Promise.resolve({data: {tuits: MOCKED_TUITS} }));
    const response = await findAllTuits();
    const tuits = response.tuits;
    render(
        <HashRouter>
            <Tuits tuits={tuits}/>
        </HashRouter>
    );
    const tuit = screen.getByText(/Jinx's tuit/i);
    expect(tuit).toBeInTheDocument();
});