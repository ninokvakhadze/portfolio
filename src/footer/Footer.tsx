import styled from "styled-components";
import facebook from "../assets/facebook-brands.svg";
import twitter from "../assets/twitter-brands.svg";
import github from "../assets/github-brands.svg"

function Footer() {
  return (
    <FooterDiv>
      <FindMeFooter>
        <FindMeFooterText>find me in:</FindMeFooterText>
        <Logos src={facebook} />
        <Logos src={twitter} />
      </FindMeFooter>
      <FindMeFooter>
        <FindMeFooterText>@ninokvakhadze</FindMeFooterText>
        <Logos src={github}/>
      </FindMeFooter>
    </FooterDiv>
  );
}
export default Footer;

const FooterDiv = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(1, 22, 39);
  padding: 15px;
  border-top: 1px solid #1e2d3d;
  display: flex;
  justify-content: space-between;
`;
const FindMeFooter = styled.div`
  display: flex;
  gap: 10px;
`;
const FindMeFooterText = styled.p`
  font-family: FiraCode-Retina;
  font-size: 16px;
  text-align: left;
  color: #607b96;
`;
const Logos = styled.img`
  width: 16px;
  height: 16px;
`;

