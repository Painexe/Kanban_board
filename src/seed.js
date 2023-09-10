import shortid from "shortid";

export default function seed(store) {
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "To Do" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Work 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Work 2"
    }
  });

//

  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Doing" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Cont work 1"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Cont work 2"
    }
  });

//

const thirdListId = shortid.generate();

store.dispatch({
  type: "ADD_LIST",
  payload: { listId: thirdListId, listTitle: "Done" }
});

store.dispatch({
  type: "ADD_CARD",
  payload: {
    listId: thirdListId,
    cardId: shortid.generate(),
    cardText: "Worked 1"
  }
});

store.dispatch({
  type: "ADD_CARD",
  payload: {
    listId: thirdListId,
    cardId: shortid.generate(),
    cardText: "Worked 2"
  }
});
};