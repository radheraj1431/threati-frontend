import styled from 'styled-components';
import timeFilter from "../layout/topbar/icons/timeFilter.svg";
const PageHolder = styled.div`
height:100%;
overflow-y:hidden;  


.setLayout{
  flex-direction:row;
  height: 98vh;
  display: flex;
}
.tabletTimeFilter{
  display:none !important;
}
.zscontent{
  .zscontentmain{
    max-height: calc(100% - 100px);
    height: calc(100% - 100px);
    overflow-y: hidden;
    overflow-x:hidden;
    position:relative;
    .fullScreen{
      z-index: 9999;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      padding:5px 10px 10px 5px;
      
      .zsCardBody{
        height: calc(100% - 40px) !important;
      }
    }
    .chartOuterWrapper, .chartInnerWrapper {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  }
  .zsenrich{
    max-height: calc(100% - 100px);
    height: calc(100% - 100px);
   overflow:scroll;
    position:relative;
    .fullScreen{
      z-index: 9999;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      padding:5px 10px 10px 5px;
      
      .zsCardBody{
        height: calc(100% - 40px) !important;
      }
    }
    .chartOuterWrapper, .chartInnerWrapper {
      height: 100%;
      width: 100%;
      overflow: hidden;
    }
  
  }
  .mainContent{
    padding: 30px 40px;
  }
  .mainContentGlobe{
    height:100vh;
  }
  .mainDiscory{
     height:95vh;
    padding: 30px 40px;
  }
}
@media screen and (max-width: 1200px){
  .setLayout{
    flex-direction:column;
    height: 98vh;
    display: flex;
  }
  .zscontent{
    width:100% !important;
    height: 100%;
    overflow: hidden;
  }
  .tabletTimeFilter{
    display:flex !important;
  }
  .timeFilter{
    background: url(${timeFilter} ) center center no-repeat;
    background-size: cover;
    height:35px;
    width:300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
  }
  .mainContent{
    padding: 30px 40px;
  }
  .mainDiscory{
    height:82vh;
   padding: 30px 40px;
 }
}
`;
export default PageHolder;





