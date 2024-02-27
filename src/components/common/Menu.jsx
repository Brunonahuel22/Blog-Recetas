import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" className='p-3'>
        <Container>
          <Navbar.Brand href="#home">Logo pagina</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Administrar</Nav.Link>
            <Nav.Link href="#pricing">Registro</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
};

export default Menu;