import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($index: String!, $type: String!, $price: Float!, $name: String!) {
    checkout(index: $index, type: $type, price: $price, name: $name) {
      session
    }
  }
`;

export const QUERY_STAR = gql`
  { 
    star
    {
      name
      index
      type
      price
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        star {
          name 
          index
          type
          price
        }
      }
    }
  }
`;
