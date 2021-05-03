let Email='';

function reducer(state,action)
{
    switch(action.type)
    {
        case 'PushEmail':{
            return state=action.value;
        }
        default:{
            return state;
        }
    }
}

export default reducer;
export {Email}