let goecodeData=[];


function homeReducer(state,action)
{
    switch(action.type)
    {
        case 'url':{
            return [...state,action.value];
        }

        default:{
            return state;
        }
    }
}
export {goecodeData};
export default homeReducer;