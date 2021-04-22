import React from 'react'; // 1
import styled from 'styled-components';
import NoImage from '../../assets/img/no_image.png';
import {useDispatch} from "react-redux";
import {push} from "connected-react-router"

const media = {
    sp: '@media(max-width: 650px)'
}

const Item = styled.div`
 background-color: red;
 padding: 1em;
 margin: 0 1em;
 background-color: #fff;
 box-shadow: 0px 3px 15px rgb(0 0 0 / 20%);
 border-radius: 1em;
 transition: all ease-out .3s;
 width: 100%;
 max-width: 12em;
 text-align: center;
 cursor:pointer;
 :hover {
  background-color: #f9f9f9;
  transition: all ease-out .3s;

 }
  p{
      margin: 0 auto;
      color: #3b3b3b;
  }
  ${media.sp} {
    margin: 1em;
   }
`;

const ItemContents = styled.div`
 text-align:center;
 padding: 1em;
 img {
     height:10em;
     width:10em;
     border-radius: 50%;
 }
 p{
     text-align:center;
     padding-top: 1em;
 }
`;

const UserCard = (props) => {
    const dispatch = useDispatch()
    // images定数に、propsのimagesをセット。0以上の時に表示させる。それ以外の時は NoImage を表示
    const images = (props.images.length > 0) ? props.images : [{path:NoImage}]
return(
 <Item
 onClick={() => dispatch(push('/product/'+props.id))}
 >

  <ItemContents>
  <img src={images[0].path} alt="ユーザーイメージ" />
  <p>{props.username}</p>
  </ItemContents>
 </Item>
 )
}

export default UserCard;