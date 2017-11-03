import { Location } from "history";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import React from "react";
import { Link, LinkProps } from "react-router-dom";

const menu = [
  {
    items: [
      {
        itemKey: "individual",
        name: "창작뱃지",
        url: "/individuals",
      },
      {
        itemKey: "individualFoods",
        name: "음식",
        url: "/individuals/foods",
      },
      {
        itemKey: "individualDesserts",
        name: "디저트",
        url: "/individuals/desserts",
      },
      {
        itemKey: "individualAnimals",
        name: "동물",
        url: "/individuals/animals",
      },
      {
        itemKey: "individualCharacters",
        name: "캐릭터",
        url: "/individuals/characters",
      },
      {
        itemKey: "individualFeminism",
        name: "페미니즘",
        url: "/individuals/feminism",
      },
      {
        itemKey: "genre",
        name: "장르뱃지",
        url: "/genres",
      },
      {
        itemKey: "genreMovies",
        name: "영화",
        url: "/genres/movies",
      },
      {
        itemKey: "genreDramas",
        name: "드라마",
        url: "/genres/dramas",
      },
      {
        itemKey: "genreAnimations",
        name: "애니메이션",
        url: "/genres/animations",
      },
      {
        itemKey: "genreGames",
        name: "게임",
        url: "/genres/games",
      },
      {
        itemKey: "genreStars",
        name: "연예",
        url: "/genres/stars",
      },
    ],
    sectionKey: "surveys",
    sectionName: "Surveys"
  },
  {
    items: [],
    sectionKey: "sales",
    sectionName: "Sales"
  },
  {
    items: [],
    sectionKey: "archives",
    sectionName: "Archives"
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
