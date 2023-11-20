/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import {
    ColContainer,
    Container,
    FlexContainer,
} from "./components/Container/Container";
import Carousel from "better-react-carousel";

const About = () => {
    return (
        <div>
            <FlexContainer>
                <Container margin="0px">
                    <p>About Us</p>
                    <p>
                        Welcome to LÉLLALL, your on-demand in-city shopping destination. At
                        LÉLLALL, we are meticulous about the details, dedicated to
                        delivering exceptional services to our users and partners. Our
                        mission is to collaborate with small businesses, often overlooked in
                        the market, providing them with a platform to boost their sales and
                        connect with a broader customer base, igniting their creative
                        potential online.
                    </p>
                </Container>
                <Container>
                    <Carousel
                        cols={1}
                        rows={1}
                        gap={10}
                        loop
                        hideArrow={true}
                        autoplay={5000}
                    >
                        <Carousel.Item>
                            <img width="100%" src="/assets/staff.png" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img width="100%" src="/assets/staffs.png" />
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </FlexContainer>
            <ColContainer bgColor="#EAFEF1">
                <p>Our Core Values</p>
                <Grid container spacing={{ xs: 1, sm: 1, md: 2, lg: 3}}>
                    <Grid xs={12} sm={4} md={4}>
                        <img src="/assets/details.svg" alt="icons" />
                        <p>Meticulous Attention to Detail</p>
                        <p>
                            LÉLLALL is committed to paying close attention to the finer
                            details of its services and operations. This reflects a dedication
                            to providing the best possible experience for its users and
                            partners.
                        </p>
                    </Grid>
                    <Grid xs={12} sm={4} md={4}>
                        <img src="/assets/service.svg" alt="icons" />
                        <p>Exceptional Service</p>
                        <p>
                            LÉLLALL is driven by a commitment to deliver exceptional services.
                            This implies a focus on quality, reliability, and customer
                            satisfaction in every aspect of their business.
                        </p>
                    </Grid>
                    <Grid xs={12} sm={4} md={4}>
                        <img src="/assets/thumb.svg" alt="icons" />
                        <p>Empowering Small Businesses</p>
                        <p>
                            LÉLLALLs mission is centered around empowering small businesses
                            and sellers who are often overlooked in the market. This core
                            value underscores their commitment to providing these businesses
                            with a platform to enhance their sales and connect with a wider
                            customer base.
                        </p>
                    </Grid>
                </Grid>
            </ColContainer>
            <FlexContainer>
                <Container margin="0px">
                    <p>CEO/Co-Founder’s Journey</p>
                    <p>
                        The journey began in January 2019 when I accompanied my mother to the local market, where I realized that most shoppers were parents. Meanwhile, the younger generation preferred the convenience of shopping via their smartphones, avoiding the need to be physically present. It struck me that small businesses and sellers on social platforms like WhatsApp, Facebook, Instagram, and Twitter were often neglected. Their reach was limited to existing followers and contacts.

                        This realization fueled my curiosity, and I began to ask questions. I often heard, "It's not possible to bring all market and social media sellers online; the market people aren't technologically advanced." But this only spurred me on to push harder.

                        My journey led me to Hauwa, with whom I instantly connected, sharing a similar vision. We pooled our resources, reaching into our own pockets to assemble the necessary team, and together, we embarked on the journey to bring our dream to life.
                    </p>
                </Container>
                <Container margin="0px">
                    <img src="/assets/ceo.png" alt='ceo'/>
                </Container>
            </FlexContainer>
        </div>
    );
};

export default About;
