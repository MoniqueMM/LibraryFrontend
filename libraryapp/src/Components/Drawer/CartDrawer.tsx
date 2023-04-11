import React, {useCallback, useContext, useMemo, useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router-dom";
import CartContext from "../../Context/CartContext";
import { groupBy } from "../../utils/utils";
import {PrimaryButton, SecondaryButton} from "../GlobalStyle";
import { CartDrawerContainer} from "./CartDrawer.styles";
import { CartItem } from "./CartItem";

interface CartDrawerProps {
    isCartDrawerOpen: boolean;
    toggleCartDrawer: () => void;
}

export const CartDrawer = (props: CartDrawerProps) => {
    const { books } = useContext(CartContext);
    const navigate = useNavigate();
    const groupItems = useCallback(() => {
        const grouped = groupBy(books, (book) => book.id );

        const result = [];

        for (const key in grouped) {
            result.push({
                items: grouped[key],
                amount: grouped[key].length,

            });
        }


        return result;
    }, [books]);





    const groupedItems = useMemo(() => groupItems(), [groupItems]);



    return (
        <Drawer
            size={500}
            open={props.isCartDrawerOpen}
            onClose={props.toggleCartDrawer}
            direction="right"
        >
            <>
                {books.length > 0 ? (
                    <div style={{ padding: "32px" }}>
                        {groupedItems.map((item) => (
                            <CartItem
                                book={item.items[0]}
                                amount={item.amount}
                            />
                        ))}
                        <div style={{ padding: "10px"}}>
                        <SecondaryButton>Dostawa</SecondaryButton>
                        <SecondaryButton>Na miejscu</SecondaryButton>
                        </div>
                    </div>

                ) : (
                    <CartDrawerContainer>
                        <h2>Brak książek</h2>
                        <p>Wypełnij swoją listę przechodząc do biblioteki</p>
                        <PrimaryButton
                            onClick={() => {
                                navigate("/book");
                                props.toggleCartDrawer();
                            }}
                        >
                            Przejdź do biblioteki
                        </PrimaryButton>
                    </CartDrawerContainer>
                )}
            </>
        </Drawer>
    );
};
