
import React, {useEffect, useState} from "react";
import ManageFieldNotes from "./components/ManageFieldNotes";
import ViewFieldNotes from "./components/ViewFieldNotes";

function FieldNotes ({subProject, getSubProject}) {

    return false ? <ManageFieldNotes
        subProject={subProject}
        getSubProject={getSubProject}
    />
    : <ViewFieldNotes subProject={subProject} />;
}

export default FieldNotes;
