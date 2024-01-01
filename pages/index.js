/*
//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import Layout from "../components/Layout";

import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51L4jXPKdTSV8bg8w0fz0kimSG031Xoc5jeB4gXeGCt8x7mASfkAYLQzmJSdYNTbQtNIdeHUnJin1xprNw3958ump00e9nhhn9v"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1L4lEGKdTSV8bg8wWWfunlGh", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  return (
    <Layout
      //handleClick here
      authText="Sign Up"
      username="none"
    >
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      //other components here
    </Layout>
  );
}
export default index;
*/

//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies } from "../ui-components";
import Layout from "../components/Layout";

import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51OP5OrCwfNqVW8CBtUkoniRNEieKzFn71hqZhJPUsUbV7ITxnb35x4mCL5H4PCNUF1cvpxBxBotvibROZMNuSEhO0029K1jrTt"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1OPiH3CwfNqVW8CBu0MBPH48", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <Layout handleClick={() => {router.push("/post");}}
      authText="Sign Up"
      username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <Testimonies />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;

