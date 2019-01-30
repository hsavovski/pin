
const initialState ={
	pin: null,
	isSet: false
};

export const pinReducer = (state = initialState, action) => {
	switch (action.type){
		case 'SUBMIT_PIN':
		{
			console.log('data', action.data)
			return {
				...state,
				pin: action.data
			}
		}
		case 'SET_PIN':
		{
			return {
				...state,
				isSet: true
			}
		}
		case 'UNSET_PIN':
		{
			return {
				...state,
				isSet: false
			}
		}
	}
	
	return state;
};


