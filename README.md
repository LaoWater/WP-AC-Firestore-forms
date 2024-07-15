/**
* The world of Multi-Step Forms has become expensive and necessary, as the world of online bussiness expands.
* In the modern world inertia of 3rd party apps, it feels like too much is falling outside the programmer's Hands.
*
* This is an integration of WordPress - Active Campaign(optional but usually activated in this context) - Firestore Database -
* Resulting in a FREE customizable multi-step form.
*
* The connection to Firebase is done in javascript and implemented in global theme settings (WP_ThemeFunctions.js) - allowing Firestore to communicate with WP.
* Later, each form_NO.html is linked to a collection in firestore, grouping data accordingly - per response/html page.
* Each form submission takes the user to the next form step, set up & hosted on a different URL Path and page.
*
* Lao Water - 15 July 2024 - Created
*
**/