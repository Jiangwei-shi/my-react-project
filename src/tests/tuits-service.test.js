import {
    createTuit,
    findTuitById,
    deleteTuit,
    findAllTuits
} from "../services/tuits-service";

import {
    createUser,
    deleteUsersByUsername, findUserById
} from "../services/users-service";

describe('can create tuit with REST API', () => {
  // TODO: implement this
//create a user for test.
    const User = {
        username: 'stone',
        password: 'stone1998',
        email: 'stone@gmail.com'
    }

//Create a Tuit for test.
    const Tuit = {
        _id: "62199f2f199814d177fa4f1c",
        tuit: "what a happy day it is!",
        postedBy: ""
    };

    let newUser = "";
    let newTuit = "";

    beforeAll( async () => {
        // remove any/all tuits to make sure we create it in the test
        await deleteUsersByUsername('stone');
        return deleteTuit(Tuit._id);
    });

    // clean up after test runs

    afterAll(async () => {
        // remove any data we created
        await deleteTuit(Tuit._id)
        return deleteUsersByUsername('stone');
    });

    test('can insert with REST API', async() => {
        //insert Tuit into Database
        newUser = await createUser(User);
        newTuit = await createTuit(newUser._id, Tuit);
        expect(newTuit.tuit).toEqual(Tuit.tuit);
        expect(newTuit.postedBy).toEqual(newUser._id);

    });
});

describe('can delete tuit wtih REST API', () => {
  // TODO: implement this
//create a user for test.
    const User = {
        username: 'stone',
        password: 'stone1998',
        email: 'stone@gmail.com'
    }

//Create a Tuit for test.
    const Tuit = {
        _id: "62199f2f199814d177fa4f1c",
        tuit: "what a happy day it is!",
        postedBy: ""
    };

    let newUser = "";

    beforeAll( async () => {
        //create a new user.
        await deleteTuit(Tuit._id);
        await deleteUsersByUsername('stone');
        newUser = await createUser(User);
        return createTuit(newUser._id, Tuit);
    });

    afterAll(()=>{
        //remove any data we created
        return deleteUsersByUsername('stone');
    });

    test('can insert with REST API', async() => {

        //delete a tuit by ID. Assumes tuit already exists
        const status = await deleteTuit(Tuit._id);

        // verify we deleted at least one tuit by tuit ID
        expect(status.deletedCount).toBeGreaterThanOrEqual(1);

    });

});

describe('can retrieve a tuit by their primary key with REST API', () => {
  // TODO: implement this
    //create a user for test.
    const User = {
        username: 'stone',
        password: 'stone1998',
        email: 'stone@gmail.com'
    }

//Create a Tuit for test.
    const Tuit = {
        _id: "62199f2f199814d177fa4f1c",
        tuit: "what a happy day it is!",
        postedBy: ""
    };

    let newUser = "";
    let newTuit = "";

    beforeAll(async ()=> {
        await deleteTuit(Tuit._id);
        await deleteUsersByUsername('stone');
        newUser = await createUser(User);
        return Tuit.postedBy = newUser._id;
    });

    afterAll(()=>{
        deleteUsersByUsername('stone');
        return deleteTuit(Tuit._id);
    });

    test('can find a tuit via ID with REST API', async() => {
        //new tuit created with mockTuit.postedBy, which is made with newuser._id
        newTuit = await createTuit(Tuit.postedBy, Tuit);

        expect(newTuit._id).toEqual(Tuit._id);
        expect(newTuit.tuit).toEqual(Tuit.tuit);
        expect(newTuit.postedBy).toEqual(Tuit.postedBy);
        //console.log(newTuit);

        let existingTuit = await findTuitById(newTuit._id);
        //console.log(existingTuit);

        expect(existingTuit.tuit).toEqual(newTuit.tuit);
        //Professors Model, stored as a User for PostedBy
        expect(existingTuit.postedBy._id).toEqual(newTuit.postedBy);
    });
});

describe('can retrieve all tuits with REST API', () => {
  // TODO: implement this
    //create a user for test.
    const User = {
        username: 'stone',
        password: 'stone1998',
        email: 'stone@gmail.com'
    }

//Create a Tuit for test.
    //Create Fake Tuit
    const firstTuit = {
        _id: "62184c059eb449f9c82c1ed2",
        tuit: "Let's make a list",
        postedBy: ""
    };

//Create Fake Tuit
    const secondTuit = {
        _id: "62184c059eb449f9c82c1ed3",
        tuit: "to test how the tuits pull",
        postedBy: ""
    };

//Create Fake Tuit
    const thirdTuit = {
        _id: "62184c059eb449f9c82c1ed4",
        tuit: "in an async fashion!",
        postedBy: ""
    };

    let newUser = "";
    let tuitOne = "";
    let tuitTwo = "";
    let tuitThree = "";

    const listOfTuits = [
        firstTuit,
        secondTuit,
        thirdTuit
    ];

    beforeAll( async ()=> {

        newUser = await createUser(User);
        //have tuits with IDs
        firstTuit.postedBy = newUser._id;
        secondTuit.postedBy = newUser._id;
        thirdTuit.postedBy = newUser._id;
        //create tuits
        tuitOne = await createTuit(firstTuit.postedBy, firstTuit);
        tuitTwo = await createTuit(secondTuit.postedBy, secondTuit);
        return(tuitThree = await createTuit(thirdTuit.postedBy, thirdTuit));
    });

    afterAll( async () => {
        await deleteTuit(tuitOne._id);
        await deleteTuit(tuitTwo._id);
        await deleteTuit(tuitThree._id);
        return (deleteUsersByUsername('stone'));
    });

    test('retrieve all tuits from REST API', async () => {

        const tuits = await findAllTuits();

        expect(tuits.length).toBeGreaterThanOrEqual(listOfTuits.length);

        //Look for users we made tuit with
        const tuitsWeInserted = tuits.filter(
            tuit => listOfTuits.indexOf(tuit) >= 0 );

        //Verify properties
        tuitsWeInserted.forEach(tuit => {
            const tuitExample = listOfTuits.find(tuit => tuit === tuit.tuit);
            expect(tuitExample.tuit).toEqual(tuit);
            expect(tuitExample.postedBy).toEqual(newUser);
        })
    })
});