//cart-icon.styles.scss 
import styled from 'styled-components'

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton}
  ${GoogleSignInButton}
  ${InvertedButton} {
      margin-top: auto;
    }

`

export const EmptyMessage = styled.span`
   font-size: 18px;
    margin: 50px auto;

`

export const CartItems = styled.div`
   height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;

  
`




// .cart-icon-container {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   .shopping-icon {
//     width: 24px;
//     height: 24px;
//   }
//   .item-count {
//     position: absolute;
//     font-size: 10px;
//     font-weight: bold;
//     bottom: 12px;
//   }
// }
// //cart-dropdown.styles.scss 
// .cart-dropdown-container {

//   .empty-message {
   
//   }
//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }
//   button {
//     margin-top: auto;
//   }
// }