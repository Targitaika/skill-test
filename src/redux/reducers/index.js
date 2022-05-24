const initial = {
  from: 0,
  to: 0,
};

export default function reducer(state = initial, action) {
  switch (action.type) {
    case 'TABLE_SET': {
      return {
        to: action.to,
        from: action.from,
      };
    }
    default: return state;
  }
}
