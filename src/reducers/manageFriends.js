export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return (
        {...state,
        friends: [
          ...state.friends,
          action.friend]}
      )

    case "REMOVE_FRIEND":
    debugger;
      const trueFriends = state.friends.filter(friend => friend.id
        !== action.id)
        // THIS DON'T MAKE SENSE!!!
      return (
        {...state,
        friends: trueFriends
        }
      )

    default:
      return state
  }
}
