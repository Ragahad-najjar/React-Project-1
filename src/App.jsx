import React from 'react';
import './App.css';
import PageHome from'./components/Pages/PageHome'
import { Route , Routes } from 'react-router-dom';
import PageAbout from './components/Pages/PageAbout';
import PagePackages from './components/Pages/PagePackages';

function App() {
  return (
    <div className="App">
{/*     <Header img={BgHome}>
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn}/>
    <Hero title="No Matter Where You're Going To," title2="We'll Take You There"/></Header> 
    <Category title="CATEGORY" text="We Offer Best Services"></Category>
    <Container>
      <Card/>
    </Container>
    <Explore >
      <Child img={image1} FirstTitle="PROMOTION"  SecTitle="Explore Nature" btn2="View Package"></Child>
      <Child img={image2} FirstTitle="PROMOTION"  SecTitle="Explore Cites" btn2="View Package"></Child>
    </Explore>
    <Category title="TRENDY" text="Our Trending Tour Packages  "></Category>
    <ListCard>
      <Cards/>
    </ListCard>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer> */}
 {/*    <Header img={BgAbout} >
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} />
    <HeroAbout title="About US" /></Header> 
    <Sec1>
      <Container2 title1="Promotion" title2="We Provide You Best Europe Sightseeing Tours" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" btn="View Packages"
      img={Eillps}/>
      </Sec1>
    <Wanderlust img={ImgSec}>
      <SecWan img={Video } text="Wanderlust" />
    </Wanderlust>
    <Sec1>
      <Container2 title1="Trend" title2="Our Popular Tour Plans" text="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." 
      num1="78%" num2="55%" des1="Vacations" des2="Honeymoon"
      img={proImg} reverse={true}/>
      </Sec1>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer>
    <Header img={BgServices} >
    <Nav menu={["Home", "Services", "About", "Package"]} logo={logo} btn="Get in touch" MenuBtn={MenuBtn} />
    <HeroAbout title="Travel With Us" /></Header> 
    <List>
      <CardSec/>
    </List>
    <Footer img={LogoFooter} text1= "Travel helps companies manage payments easily." title1="Company" 
        title2="Destinations" row="Copyright@Xpro 2023 All Right Reserved">
    </Footer> */}
    <Routes>
        <Route path="/" element={<PageHome/>} />  
        <Route path="/about" element={<PageAbout/>} /> 
        <Route path="/Package" element={<PagePackages/>} /> 
      </Routes>
    </div>
  );
}

export default App; 
