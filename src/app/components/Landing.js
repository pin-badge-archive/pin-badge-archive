import { inject, observer } from "mobx-react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Grid, Image, Divider } from "semantic-ui-react";

import Layout from "./Layout";

const imageUrl = "https://react.semantic-ui.com/assets/images/wireframe/image.png";

@inject("authStore", "routerStore")
@observer
export default class Landing extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 3000,
      autoplay: true,
      // centerMode: true,
      focusOnSelect: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Layout>
        <Slider {...settings}>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'red' }}><h3>1</h3></div>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'orange' }}><h3>2</h3></div>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'yellow' }}><h3>3</h3></div>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'green' }}><h3>4</h3></div>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'blue' }}><h3>5</h3></div>
          <div style={{ padding: '150px 30px', textAlign: 'center', background: 'violet' }}><h3>6</h3></div>
        </Slider>
        <Grid style={{ marginTop: 30 }}>
          <Divider horizontal>NEW</Divider>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Divider horizontal>SURVEYS</Divider>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Divider horizontal>SALES</Divider>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Divider horizontal>ARCHIVES</Divider>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
            <Grid.Column width={4}>
              <Image src={imageUrl} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}
