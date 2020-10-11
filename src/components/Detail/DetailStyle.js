import styled from "styled-components"
const Contentbox = styled.div`
  width:1180px;
`;
const Castsbox = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
`;
const Videosbox = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
`;
const Similarbox = styled.div`
  width:100%;
  display:flex;
  justify-content: space-between;
`;
const SectionTitle = styled.h2`
  padding: 100px 0 50px;
`;
const Inner = styled.div`
  padding-top: 50px;
  display:flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 200px;
`;
const CastBox = styled.div`
    width: 150px;
    text-align: center;
`;
const CastsImg = styled.img`
    width: 150px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 4px 4px 14px 4px #cbcbcb;
`;
const CastsName = styled.h4`
    font-size: 18px;
    padding: 20px 0 10px;
`;
const CastsCha = styled.p`
    font-size: 16px;
`;
const MainBg = styled.div`
  width: 100%;
  height: 600px;
  filter: grayscale(100%);
  z-index: -10;
`;
const Intro = styled.div`
    width: 1180px;
    display: flex;
    
`;
const PosterImg = styled.img`
    width: 280px;
    height: 400px;
    border-radius: 10px;
    margin-top: -100px;
`;
const ContText = styled.div`
    padding: 20px;
`;
const IntroTitle = styled.h2`
    font-size: 40px;
    display: inline;
`;
const IntroGenres = styled.p`
    margin-left: 30px;
    font-szie: 26px;
    display: inline;
    font-weight: 600;
`;
const IntroLine = styled.div`
    width: 880px;
    height: 2px;
    background: #e60000;
    margin: 20px 0 30px;
`;
const IntroTagLine = styled.h4`
    font-size: 20px;
    font-weight: blod;
    padding-bottom: 20px;
`;
const LikeBtn = styled.button`
    font-size: 22px;
    font-weight: 900;
    margin-left: 20px;
    width: 130px;
    height: 45px;
    border-radius: 10px;
    border: none;
    background: #e60000;
    color: #fff;
    cursor: pointer;
`;
const Similaritem = styled.img`;
    border-radius: 10px;
    width:300px;
    height:400px;
    box-shadow: 4px 4px 14px 4px #cbcbcb;
`; 
const SimilarBox = styled.div`;
    border-radius: 10px;
    width:250px;
    height:350px;
    text-align: center;
`;
const SimilarTitle = styled.h4`;
    font-size: 26px;
    padding-top: 20px;
`;
const Video = styled.img`
  border-radius: 10px;
  width:380px;
  height:220px;
`;
export {
    Video,
    Similaritem, 
    SimilarBox, 
    SimilarTitle, 
    Intro, 
    PosterImg, 
    ContText, 
    IntroTitle, 
    IntroGenres, 
    IntroLine,
    IntroTagLine, 
    LikeBtn, 
    MainBg, 
    Contentbox, 
    Castsbox, 
    Videosbox, 
    Similarbox, 
    SectionTitle, 
    Inner, 
    CastBox, 
    CastsImg, 
    CastsName, 
    CastsCha
}