const initialState = {
  isOpen: false,
  modalType: 'info',
  body: ''
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return Object.assign({}, state, {
        isOpen: true,
        modalType: action.modalType,
        modalText: action.modalText
      });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {isOpen: false});
    default:
      return state;
  }
};

export default modal;
