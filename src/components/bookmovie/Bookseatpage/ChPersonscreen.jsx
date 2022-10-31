import styled from "styled-components";
import { React, useState, useEffect } from "react";

const ChoPersonscreen = ({ reserveseat, selected, onClick }) => {
  const isSelected = selected || reserveseat;

  return (
    <>
      {isSelected ? (
        <ButtonSeat onClick={onClick}></ButtonSeat>
      ) : (
        <AuttonSeat onClick={onClick}></AuttonSeat>
      )}
    </>
  );
};

export default ChoPersonscreen;

const Personscreen = styled.div`
  border: none;
  width: 100px;
  height: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 1px;
`;

const Button = styled.div`
  border: solid 1px gray;
  width: 20px;
  height: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-right: 1px;
  margin-top: 2px;
`;

const Screen = styled.div`
  border: none;
  margin-left: 150px;
  margin-top: 30px;
  width: 700px;
  height: 20px;
  background: #d4d3c9;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SeatScreen = styled.div`
  border: none;
  margin-left: 150px;
  width: 700px;
  height: 380px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const SeatList = styled.div`
  border: none;
  width: 500px;
  height: 315px;
  align-items: center;
  justify-content: center;
  display: block;
`;

const Group = styled.div`
  border: none;
  width: 500px;
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const ButtonSeat = styled.button`
  border: solid 1px gray;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: gray;
`;

const AuttonSeat = styled.button`
  border: solid 1px gray;
  margin-left: 10px;
  width: 20px;
  height: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: white;
`;
