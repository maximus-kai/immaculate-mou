import database from '../../firebase/firebase'

export const addDetail = ({surname = '' , name = ''}={}) =>(
    {
        type:'ADD_DETAILS',
        detail:{
            name,
            surname
        }

    }
);


export const setDetail = ({surname = '' , name = ''}={}) =>(
    {
        type:'SET_DETAILS',
        detail:{
            name,
            surname
        }

    }
);


export const startSetDetail = (regData = {}) => {
    return (dispatch)=>{ 
        // 
        database.ref().once('value')
        // 
        .then((snapshot)=>{
            // 
            const dataFromFire = []
            snapshot.forEach((childSnapshot)=>{
                dataFromFire.push({
                    ...childSnapshot.val()
                })
            })
                // console.log('what we get from Firebase:',dataFromFire)
                const firstDataToFire = dataFromFire[dataFromFire.length-1]
                const {nameToFire  , surnameToFire} = firstDataToFire
                // console.log('first names and surname[0] to fire of the array',nameToFire , surnameToFire)
                dispatch(setDetail({
                    name:nameToFire,
                    surname:surnameToFire
                }))
        })
        // 
    }
}



export const startAddDetail = (regData = {}) => {
    return (dispatch)=>{
        const {nameFromPage='default-Name' , surnameFromPage="default-surname"} = regData;
        // 
        const dataToFire = {nameToFire:nameFromPage , surnameToFire:surnameFromPage}
        // 
        database.ref().push(dataToFire)
        .then(()=>{
            dispatch(addDetail(
                {
                    name:dataToFire.nameToFire,
                    surname:dataToFire.surnameToFire
                }
            ))
        })
        // 
        

    }
}
export default startAddDetail;