
declare module "redux" {
    interface ActionCreator {
        (...args: Array<any>): Object;
    }

    interface ActionCreators {
        [key: string]: ActionCreator
    }

    interface Reducer {
        (state: any, action: Object): any;
    }

    interface StoreMethods {
        dispatch(action: Object): Object;
        getState(): Object;
    }

    class Store {
        getReducer(): Function;
        replaceReducer(nextReducer: Reducer): void;
        dispatch(action: Object): Object;
        getState(): Object;
        subscribe(listener: Function): Function;
    }

    function createStore(
        reducer: Reducer | Object,
        initialState?: any
    ): Store;

    function bindActionCreators<T>(
        actionCreators: ActionCreator | ActionCreators,
        dispatch: Function
    ): T;

    function composeMiddleware(...middlewares: Array<Function>): Function;
    function combineReducers(reducers: Object): Reducer;
    function applyMiddleware(...middlewares: Array<Function>): Function;

}

declare module "react-redux" {
    import React = require("react");
    import redux = require("redux");

    interface ProviderProps {
        store: redux.Store;
        children: Function;
    }

    interface ProviderState {
        store: redux.Store;
    }

    class Provider extends React.Component<ProviderProps, ProviderState> {}

    interface ConnectorProps {
        children: Function;
        select: Function;
    }

    class Connector extends React.Component<ConnectorProps, any> {}

    function connect(select: Function): any;
    function provide(store: redux.Store): any;
}
