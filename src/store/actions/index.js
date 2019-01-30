

export function submitPin(data)
{
    dispatch({type: 'SUBMIT_PIN', data: data});
}

export function setPin()
{
    dispatch({type: 'SET_PIN'});
}