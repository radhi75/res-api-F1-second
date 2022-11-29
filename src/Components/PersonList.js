import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_person } from "../redux/Action/personAction";
import PersonCard from "./PersonCard";
const PersonList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_person());
  }, [dispatch]);
  const person = useSelector((state) => state.personreducer.person);

  return (
    <div>
      {person.map((el) => (
        <PersonCard key={el._id} el={el} />
      ))}
    </div>
  );
};

export default PersonList;
