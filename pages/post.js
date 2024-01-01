//pages/post.js
import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { Authenticator, Flex, Heading, Text, useTheme, View } from "@aws-amplify/ui-react";
import { Footer, Logo, Stories } from "../ui-components";

function Post() {
  const authComponents = {
    Header() {
      const { tokens } = useTheme();
      return (
        <Flex
          justifyContent={"center"}
          direction="column"
          paddingTop={tokens.space.xxxl}
          paddingBottom={tokens.space.xxl}
        >
          <Logo />
        </Flex>
      );
    },
  };

  return (
    <Authenticator components={authComponents} hideSignUp={true}>
      {({ signOut, user }) => (

        <Layout
          handleClick={() => signOut()}
          authText="Sign Out"
          username={user.signInDetails.loginId.split("@")[0]}
        >
        <button onClick={() => {console.log(user)}}>
          ABC
        </button>
          <View marginTop="50px" marginBottom="30px">
            <Heading level={2}>Welcome to our backstage</Heading>
            <Text marginTop="20px">
             Discover stories,thinking, and expertise from writers on any top{" "}
            </Text>
          </View>
          <Stories />
          <View marginTop="50px" marginBottom="50px">
            <Footer />
          </View>
        </Layout>
      )}
    </Authenticator>
  );
}
export default Post;

/*
//pages/post.js
import React from "react";
import { Heading, Text, View } from "@aws-amplify/ui-react";
import Layout from "../components/Layout";
import { Footer, Stories } from "../ui-components";
function Post() {
  return (
    <Layout
      handleClick={() => {}}
      authText="Sign Out"
      username={"christian@hotmail.com".split("@")[0]}
    >    
      <View marginTop="50px" marginBottom="30px">
        <Heading level={2}>Welcome to our backstage</Heading>
        <Text marginTop="20px">
          Discover stories,thinking, and expertise from writers on any top{" "}
        </Text>
      </View>
      <Stories />
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default Post;
*/

