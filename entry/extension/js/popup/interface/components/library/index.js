import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Image, Heading } from 'atomic'
import FormProfileNewPerson from 'workshop/forms/profile/FormProfileNewPerson'

/* ---------------------------- Module Package ------------------------------ */
/**
 * @const LIBRARY_CATALOG
 * @desc Match dispatched Redux Actions with a Dialog Components
 * 
 * @todo The DIALOG_CATALOG hides important settings in code, in an obscrure location.
 * The Dialog Catalog needs to move to the frontend, so permissioned roles can create new
 * dialog propmpts as the application grows in complexity.
 */
const LIBRARY_CATALOG = {
  NEW_PERSON: FormProfileNewPerson,
}

const LIBRARY_CATALOG_ADVANCED = {
  form: {
    PERSON_NEW: FormProfileNewPerson,
  },
  screenshot: {
    singlePage: <Image src={assets.screenshots.singlePage}/>,
    multiplePages: <Image src={assets.screenshots.multiplePages}/>,
    application: <Image src={assets.screenshots.application}/>,
  }
}

export default LIBRARY_CATALOG_ADVANCED