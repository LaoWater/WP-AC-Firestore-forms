/**
 * Lao:
 * Added FireBase SDK
 * Add this at the end of the Standard Theme Functions in Wordpress (functions.php)
 * This enables communication between WP and Firebase.
 */

function enqueue_custom_scripts() {
    // Enqueue Firebase SDK
    wp_enqueue_script( 'firebase-app', 'https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js', array(), null, true );
    wp_enqueue_script( 'firebase-firestore', 'https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js', array(), null, true );

    // Localize Firebase Config
    wp_localize_script( 'firebase-app', 'firebaseConfig', array(
        'apiKey' => 'AIzaSyByvysQkdXBKxqw_DHaCwFZBw6ZkisL33Y',
        'authDomain' => 're-connect-fro.firebaseapp.com',
        'projectId' => 're-connect-fro',
        'storageBucket' => 're-connect-fro.appspot.com',
        'messagingSenderId' => '784508495667',
        'appId' => '1:784508495667:web:49d8a49c1b81d0757e4046',
        'measurementId' => 'G-40XT5BQSWW'
    ));
}
add_action( 'wp_enqueue_scripts', 'enqueue_custom_scripts' );