const defaltState = {
    value:'initValue',
    list:['1:dfdfdjs','2:jdfjdsio']
}

export default (state=defaltState,action)=>{
    if(action.type === 'change_type'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.value = action.value
        return newState
    }else if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push('next:dfdfd')
        return newState
    }
    return state
}