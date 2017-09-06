import { Location } from "history";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import * as React from "react";
import { Link, LinkProps } from "react-router-dom";

const menu = [
  {
    items: [
      {
        itemKey: "operationOrders",
        name: "관제 현황",
        url: "/about/orders"
      },
      {
        itemKey: "operationClaims",
        name: "클레임 현황",
        url: "/about/claims"
      }
    ],
    sectionKey: "about",
    sectionName: "About"
  },
  {
    items: [],
    sectionKey: "survey",
    sectionName: "Survey"
  },
  {
    items: [],
    sectionKey: "onsale",
    sectionName: "On Sale"
  },
  {
    items: [],
    sectionKey: "archive",
    sectionName: "Archive"
  },
];

const Item = (({ routerStore, item }) => (
  <ItemWrapper
    className={routerStore.location.pathname === item.url ? "selected" : ""}
  >
    <ItemLink to={item.url}>{item.name}</ItemLink>
  </ItemWrapper>
));

const Section = ({ section }) => (
  <SectionWrapper>
    <SectionTitle>{section.sectionName}</SectionTitle>
    <SectionMenu>
      {section.items.map(item => <Item key={item.itemKey} item={item} />)}
    </SectionMenu>
  </SectionWrapper>
);

export default () => (
  <MenuWrapper>
    {menu.map(section => (
      <Section key={section.sectionKey} section={section} />
    ))}
  </MenuWrapper>
);
