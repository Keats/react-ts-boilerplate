// redux-thunk function because exporting a single function
// is not well supported and it's like 5 LOC
export function thunk(data: any) {
    let {dispatch, getState} = data;
    return (next: any) => (action: any) =>
        typeof action === "function" ?
            action(dispatch, getState) :
            next(action);
}
