import instance from ".";

const getAllpets = async()=>{
const response = await instance.get("/pets")
return response.data;

};

const getOnePet = async(id)=>{
    const res = await instance.get(`/pets/${id}`);
    return res.data; 
    
};

const createPet = async(name, type, image, adopted)=>{
    const res = await instance.post(`/pets`,{
        name: name,
        type: type,
        image: image,
        adopted: adopted,
     });
    return res.data; 
    
 };




export { getAllpets,getOnePet,createPet };
