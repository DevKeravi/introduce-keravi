import React from "react";
import CardHeader from "../components/CardHeader";
import {
  Github,
  Bootstrap,
  House,
  Envelope,
  Youtube,
  Cloud,
} from "react-bootstrap-icons";
import styled from "styled-components";
import ContactCard from "../components/ContactCard";
import { contactPropsArray } from "../components/ContactCard";

const ContactWrapper = styled.div``;

const data: contactPropsArray = {
  props: [
    {
      title: "Info",
      icon: <Cloud />,
      link: "현재 수원에서 취업 준비 중인 29세 프로그래머 채성렬입니다. ",
      linkable: false,
    },
    {
      title: "Email",
      icon: <Envelope />,
      link: "cmkrosp@gmail.com",
      linkable: false,
    },
    {
      title: "Github",
      link: "https://github.com/DevKeravi",
      icon: <Github />,
      linkable: true,
    },
    {
      title: "Blog",
      link: "https://keravi.tistory.com",
      icon: <Bootstrap />,
      linkable: true,
    },
    {
      title: "Youtube",
      link: "https://www.youtube.com/channel/UC9gYsn_M_jv7vzENBhKZHtA",
      icon: <Youtube />,
      linkable: true,
    },
    {
      title: "Homepage",
      link: "https://devkeravi.site",
      icon: <House />,
      linkable: true,
    },
  ],
};

const Contact = () => {
  return (
    <div>
      <CardHeader
        header="Contacts"
        subtitle="빠른 시일 내에 확인하고 연락드리겠습니다."
      ></CardHeader>
      <ContactCard {...data} />
    </div>
  );
};

export default Contact;
