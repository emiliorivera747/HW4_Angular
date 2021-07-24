


module.exports = {
    findUser,
    addUser,
    findPArecord,
    addPArecord,
    getAllUsers,
    getAllPArecords,
    deletePArecord
    }




let Users = [{
    username: "admin",
    role: "Admin",
   password:"123123"},
    {username: "user",
        role: "User",
        password:"123123"}

];

//TODO: create an array that will hold PArecords. You might want to hardcode several of them to make the debugging easier.
//Reminder about what fields PArecords should have:
//     calories:
//     minutes:
//     caloriegoal:
//     minutegoal:
//     steps:
//     activityType:
//     createdDate:
//     createdBy:
//

//TODO: (high level instruction) in order to correctly identify the records to be deleted you should use two fields 'createdBy' and 'createdDate'



async function findUser(username){


    return new Promise((resolve) => {
        const index = Users.map(user => user.username).indexOf(username);
        console.log("Find user", index);
        if (index!=-1) {

            setTimeout(()=>{
                resolve(Users[index]);
                },10);
        }
        else
            resolve(null);
    });
}

async function getAllUsers(){
    return new Promise((resolve, reject) => {
        if (Users.length>0) {
            setTimeout(()=>{
                resolve(Users);
            },10);
        }
        else
            reject(false);
    });
}

async function addUser(user){

    console.log("DB: AddUser()", user);
    return new Promise((resolve, reject) => {

        if (user.username && user.role) {
            setTimeout(()=>{

                Users.push(user);
                resolve(user);
            },10)
        }
        else
            reject(false);
    });
}


//TODO: this function should find a parecord based on 'date' and 'username' and return a promise that will be later handled by the middleware.
async function findPArecord(date, username){

}

//TODO: this function should receive a parecord JSON and insert into the array. As always, it returns a promise and the corresponding middleware handles the reposnse to the client.  PArecords with the same date can not be allowed to be saved if they are coming from the same user.
async function addPArecord(parecord){
    }


    //TODO: this function should return a promise that will allow the corresponding middleware to send all of the parecords from the array.
async function getAllPArecords(){

}

//TODO: delete a parecord based on 'date' and 'username'.This function also return a promise. Remember, that only the authors of the PA record are allowed to delete them. If an unothorized delteion request comes in, you must let the client know. Watch Lectrue 6 from 46:20 for more details.
async function deletePArecord(date, username){

}
