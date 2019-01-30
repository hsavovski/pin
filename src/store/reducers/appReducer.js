
const initialState ={
	loggedIn: false
};

export const appReducer = (state = initialState, action) => {
	switch (action.type){
		case 'LOGIN':
		{
			return {loggedIn: true}
		}
		case 'LOGOUT':
		{
			return {loggedIn: false}
		}
	}
	
	return state;
};


