import React from "react";
import ProblemsNavbar from "../components/problemsnavbar";
import UpdatesDiv from "../components/updatesdiv";
import ProblemsList from "../components/problemslist";

function ProblemsPage(){
    return (
        <React.Fragment>
            <ProblemsNavbar />
            <UpdatesDiv />
            <ProblemsList />
        </React.Fragment>
    )
}


export default ProblemsPage