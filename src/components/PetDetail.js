import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { deletePet, getPetById, updatePet } from "../api/pets";

const PetDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data: pet, isLoading } = useQuery({
    queryKey: ["pet", id],
    queryFn: () => getPetById(id),
  });

  const { mutate: deleteP, isPending: dLoading } = useMutation({
    mutationKey: ["deletePet", id],
    mutationFn: () => deletePet(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["pet", id]);
    },
  });

  const { mutate: updateP, isPending: uLoading } = useMutation({
    mutationKey: ["updatePet", id],
    mutationFn: () => updatePet(id, pet),
    onSuccess: () => {
      queryClient.invalidateQueries(["pet", id]);
    },
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (!pet) return <h1>Not Found</h1>;
  return (
    <div className="bg-[#F9E3BE] w-screen h-[100vh] flex justify-center items-center">
      <div className="border border-black rounded-md w-[70%] h-[70%] overflow-hidden flex flex-col md:flex-row p-5">
        <div className="h-full w-full md:w-[35%]">
          <img
            src={pet.image}
            alt={pet.name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-[65%] h-full pt-[30px] flex flex-col p-3">
          <h1>Name: {pet.name}</h1>
          <h1>Type: {pet.type}</h1>
          <h1>adopted: {pet.adopted}</h1>

          <button
            onClick={() => {
              updateP();
            }}
            className="w-[70px] border border-black rounded-md  hover:bg-green-400 mb-5"
          >
            {uLoading ? "Loading..." : "Adopt"}
          </button>

          <button
            onClick={() => {
              deleteP(id);
            }}
            className="w-[70px] border border-black rounded-md  hover:bg-red-400"
          >
            {dLoading ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetail;
