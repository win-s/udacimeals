export const ADD_RECIPIE = 'ADD_RECIPIE';
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR';

export function addRecipe( { day, recipe, meal } ){
  return {
    type: ADD_RECIPIE,
    day,
    recipe,
    meal
  };
}

export function removeFromCalendar( { day, meal } ){
  return {
    type: REMOVE_FROM_CALENDAR,
    day,
    meal
  };
}