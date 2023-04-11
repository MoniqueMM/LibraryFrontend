import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import { BookDto } from "../Book/BookDto";

import {
    Amount,
    CartItemContainer,
    DetailsContainer,
    LeftSide,
    Name,
    RemoveItem,
    RightSide,
    Thumbnail,
} from "./CartItem.styles";

type CartItemProps = {
    book: BookDto;
    amount: number;

};

export const CartItem = (props: CartItemProps) => {
    const { removeBook } = useContext(CartContext);

    const removeItem = () => {
        removeBook(props.book);
    };

    return (
        <CartItemContainer>
            <LeftSide>
                <Thumbnail alt={"Book"} src={props.book.src} />
                <DetailsContainer>
                    <div>
                        <Name>{props.book.title}</Name>
                        <Amount>&nbsp;x{props.amount}</Amount>
                    </div>

                </DetailsContainer>
            </LeftSide>
            <RightSide>
                <RemoveItem onClick={removeItem}>x</RemoveItem>
            </RightSide>
        </CartItemContainer>
    );
};
