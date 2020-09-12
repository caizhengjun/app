let obj = [
    {name: "caizhengjun", age: 18}
];

export function data(state = obj[0].name, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}
