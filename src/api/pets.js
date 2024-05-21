import instance from ".";

const getAllpets = async()=>{
const response = await instance.get("/pets")
return response.data;

};

const getOnePet = async(id)=>{
    const res = await instance.get(`/pets/${id}`);
    return res.data; 
    
};

// const createPet = async(name, tybe, image)=>{
//     const res = await instance.post(`/pets`,{
//         name:""
//         tybe:""
//         image:""
//         adobted:""
//     });
//     return res.data; 
    
// };




export { getAllpets,getOnePet };
