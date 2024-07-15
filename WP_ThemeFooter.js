<script>
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore(app);

    // Make the db and Firestore functions accessible globally
    window.db = db;
    window.addDoc = firebase.firestore().collection.add;
    window.collection = firebase.firestore().collection;
    window.serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

    async function submitForm() {
        const problem = document.getElementById('problem').value;

        try {
            await window.addDoc(window.collection(window.db, "formResponses"), {
                problem: problem,
                timestamp: window.serverTimestamp()
            });
            alert('Mulțumim! Răspunsul tău a fost trimis.');
            window.location.href = '/path-to-your-second-step-page'; // Redirect to the next step
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }

    // Attach the form submit handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        submitForm();
    });
});
</script>
