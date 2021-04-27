
import React, {useEffect, useState} from "react";
import ManageFieldNotes from "./components/ManageFieldNotes";
import ViewFieldNotes from "./components/ViewFieldNotes";
const checkForPermission = (permissions, permission) => {
    if (permissions.length > 0) {
        const permissionName = permissions.map(({name}) => name);
        return permissionName.includes(permission);
    }
    else {
        return false;
    }
}
function FieldNotes ({subProject, getSubProject, permissions, permission}) {

    return checkForPermission(permissions, permission) ? <ManageFieldNotes
        subProject={subProject}
        getSubProject={getSubProject}
    />
    : <ViewFieldNotes subProject={subProject} />;
}

export default FieldNotes;
