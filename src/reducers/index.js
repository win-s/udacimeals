import { 
  ADD_RECIPIE , 
  REMOVE_FROM_CALENDAR 
} from '../actions'

const dates = [
  'sunday',
  'monday',
  'tuesday',
  'thuresday',
  'friday',
  'saturday'
];

const initialCalendarState = {};

dates.forEach( date =>{
  initialCalendarState[date] ={
    breafast:null,
    lunch:null,
    dinner:null
  };
});

function calendar( state = initialCalendarState, action ){
  const { day, recipe, meal } = action;

  console.log('action',action)

  switch( action.type ){
    case ADD_RECIPIE :
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal] : recipe.label
        }
      };
    case REMOVE_FROM_CALENDAR :
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal] : null
        }
      };
    default :
      return state;
  }
}

export default calendar;