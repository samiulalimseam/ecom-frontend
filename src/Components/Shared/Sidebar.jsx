
import {
  Box,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";


import {
  BsGearFill
} from "react-icons/bs";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { sideBarItems } from "./utility";

const Sidebar = () => {
  const {pathname} = useLocation();
  
 
  return (
    <Box 
      display={["none","none"]}
      flexDirection={"column"}
      justifyContent={"space-between"}
      className="sidebar"
      position={"sticky"}
      top={"56px"}
      style={{ width: "17%", height: "92vh" }}
      bg={"gray.100"}
      padding={2}
    >
      <Box
        display={"flex"}
        gap={'1'}
        flexDirection={"column"}
        alignItems={"left"}
        justifyContent={"center"}
      >
       
        {sideBarItems.map((item, i) => {
          return (
            <div key={`link_${i}`}>
              <RouterLink to={item.link}>
                <Button
                  w={"full"}
                  display={"flex"}
                  fontSize={"sm"}
                  size={"sm"}
                  justifyContent={"left"}
                  gap={3}
                  _hover={{color:'white', bg: 'purple'}}
                  color={item.link != pathname ? 'black':'white'}
                  bg={item.link === pathname ? '#301934':'white'}
                  variant={"ghost"}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </RouterLink>
            </div>
          );
        })}
      </Box>
      <Box  display={"flex"} flexDirection={"column"} gap={1}>
        <Box>
          <LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">
            <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
              <Text fontSize={"xs"}>1 hour ago</Text>
            </Box>
            <Heading size="sm" my="2">
              <LinkOverlay href="#">Mehedi just updated the meal!</LinkOverlay>
            </Heading>
            <Text fontSize={"sm"}>
              Update your account regularly to avoid conflicts of calculation
            </Text>
          </LinkBox>
        </Box>
        <RouterLink>
          <Button
            alignItems={"center"}
            display={"flex"}
            gap={1}
            width={"full"}
            size={"sm"}
          >
            <BsGearFill></BsGearFill>Settings
          </Button>
        </RouterLink>
      </Box>
    </Box>
  );
};

export default Sidebar;
