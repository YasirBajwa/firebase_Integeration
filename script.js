

function saveData(){
    var name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var key = firebase.database().ref('student_data').push().key;

    var student={
        name: name,
        password:password,
        key
    }
    firebase.database().ref('student_data/' + key).set(student);

    // random key
    // var key = Math.random() * 10;
    // firbase key
    // console.log( firebase_key);

}

function getFirebaseData(){
         firebase.database().ref('student_data').once('value',function(data){
             console.log(data.val());
         })
}
getFirebaseData()


