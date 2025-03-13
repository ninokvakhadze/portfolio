import styled from "styled-components";
import phone from "../../../assets/phone-solid.svg";
import envelope from "../../../assets/envelope-solid.svg";

function Contacts() {
  return (
    <ContactsDiv>
      <ContactsComponent>
        <AddresImg src={phone} />
        <Addres>+(995) 595 48 26 21</Addres>
      </ContactsComponent>
      <ContactsComponent>
        <AddresImg src={envelope} />
        <Addres>ninokvakhadze2@gmail.com</Addres>
      </ContactsComponent>
    </ContactsDiv>
  );
}

export default Contacts;

const ContactsDiv = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ContactsComponent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const AddresImg = styled.img`
  width: 16px;
  height: 16px;
`;
const Addres = styled.p`
  font-family: "Fira code", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: rgb(96, 123, 150);
`;
