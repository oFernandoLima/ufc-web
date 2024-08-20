import { Provider } from "react-redux";
import { store } from "./store";
import { ContadorRedux } from "./ContadorRedux";

export function PrincipalRedux() {
    return (
        <Provider store={store}>
            <ContadorRedux />
        </Provider>
    )
}