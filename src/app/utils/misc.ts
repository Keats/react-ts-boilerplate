
// Grabs all the objects from the data dict that have an id
// in the ids array given
export function getIntersection<T>(data: {[key: string]:  T}, ids: Array<number>): Array<T> {
    let elements: Array<T> = [];

    for (let id of ids) {
        if (data[id] !== undefined) {
            elements.push(data[id]);
        }
    }

    return elements;
}


// redux-thunk function because exporting a single function
// is not well supported and it's like 5 LOC
export function thunk(data: any) {
    let {dispatch, getState} = data;
    return (next: any) => (action: any) =>
        typeof action === 'function' ?
            action(dispatch, getState) :
            next(action);
}
