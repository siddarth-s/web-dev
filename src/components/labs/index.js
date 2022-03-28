import React from "react";
import {Link} from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list";
import ReduxExamples from "./redux-examples";

const Labs = () => {
    return(
        <>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link>

            | |

            <Link to = "/tuiter/home">
                Tuiter
            </Link>
            <br/><br/>
            <ReduxExamples/>
            {/*<TodoList/>*/}
            {/*<ConditionalOutput/>*/}
            {/*<Styles/>*/}
            {/*<Classes/>*/}
        </>
    );
};

export default Labs;