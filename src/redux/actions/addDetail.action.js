

const addDetail = ({surname = '' , name = ''}={}) =>(
    {
        type:'ADD_DETAILS',
        detail:{
            name,
            surname
        }

    }
);

export default addDetail;