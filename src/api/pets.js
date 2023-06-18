import instance from ".";

const getPets = async () => {
  const res = await instance.get("/pets");
  return res.data;
};

const getPetById = async (id) => {
  const res = await instance.get(`/pets/${id}`);
  return res.data;
};

const deletePet = async (id) => {
  const res = await instance.delete(`/pets/${id}`);
  return res.data;
};

const updatePet = async (id, pet) => {
  const res = await instance.put(`/pets/${id}`, {
    ...pet,
    adopted: 1,
  });
  return res.data;
};

const addPet = async (pet) => {
  const res = await instance.post("/pets", pet);
  return res.data;
};

export { getPets, getPetById, deletePet, updatePet, addPet };
