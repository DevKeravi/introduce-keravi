import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{ fontFamily: "SansNeo" }}>
        <Navbar.Brand href="/">KERAVI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer exact to="/">
              <Nav.Link>소개</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/tech">
              <Nav.Link>보유 기술</Nav.Link>
            </LinkContainer>
            <NavDropdown title="포트폴리오" id="collasible-nav-dropdown">
              <LinkContainer exact to="/portfolio">
                <NavDropdown.Item>전체 보기</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <NavDropdown.Item>웹 포트폴리오</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">
                FE 포트폴리오 (준비중)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                FS 포트폴리오 (준비중)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>게임 포트폴리오</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=nL6MzJg9ZfQ"
              >
                WinApi ( 별의 커비 )
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.youtube.com/watch?v=dfBMEfIsmc8"
                rel="noreferrer"
                target="_blank"
              >
                Cocos2dx ( 슬레이 더 스파이어 )
              </NavDropdown.Item>
              <NavDropdown.Item
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=PfDJAFqLdfs"
              >
                DirectX 12 ( 몬스터 헌터 )
              </NavDropdown.Item>
              <NavDropdown.Item
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/watch?v=IAM2nbftdw0"
              >
                Unity3D ( 포탈 )
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <LinkContainer exact to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
