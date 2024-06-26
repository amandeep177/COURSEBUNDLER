import React from "react";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  VStack,
  HStack,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiMenu5Fill, RiLogoutBoxLine ,RiDashboardFill} from "react-icons/ri";

const LinkButton = ({ url = "/", title = "Home",onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant={"ghost"}>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isAuthenticated = true;
  const user = {
    role:"admin",
  };
  const logoutHandler = ()=>{
    console.log('Logout')
    onClose();
  }
  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height={"12"}
        rounded={"full"}
        position={"fixed"}
        top={"6"}
        left={"6"}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}> COURSE BUNDLER</DrawerHeader>
          <DrawerBody>
            <VStack spacing={"4"} alignItems={"flex-start"}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request a Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={"ghost"} colorScheme="green">
                            Profile
                          </Button>
                        </Link>
                        <Button variant={"ghost"} onClick={logoutHandler} >
                          <RiLogoutBoxLine />
                          LogOut
                        </Button>
                      </HStack>

                      {
                        user && user.role === "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard" >
                        
                        <Button colorScheme="purple" variant={'ghost'}>
                             <RiDashboardFill style={{margin:'4px'}} />
                            Dashboard
                        </Button>
                        </Link> 
                      ) }
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p> OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme="yellow">SignUp</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
