export const task3A = (initialState, operations) => {

    let stateParsed = initialState.split(' ');
    let res = [initialState];

    operations.map(el => {
        let newState = '';
        const beforeColorSwap = el[0] + el[1];
        const afterColorSwap = el[0] + el[2];
        const parsedItemIndex = stateParsed.indexOf(beforeColorSwap);

        stateParsed[parsedItemIndex] = afterColorSwap;
        newState = stateParsed.join(' ');
        res.push(newState);
    })

    res = JSON.stringify(res);
    
    return res;
}