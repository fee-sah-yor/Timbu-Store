import React, { useEffect, useState } from 'react'
import CartPage from '../components/CartPage';
import CheckoutPage from '../components/CheckoutPage';
import PaymentPage from '../components/PaymentPage';

const ConfirmationPage = () => {
    const step = ["1. Cart", "2. Checkout", "3. Payment"];
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(true)
    const [complete, setComplete] = useState(false)

    const pageDisplay = () => {

        if (page == 1) {
            return <CartPage />
        } else if (page == 2) {
            return (
                <div className=''>
                    <CheckoutPage />
                    {/* <PayCart
                        title='Item details'
                        path=""
                        onClick={() => setPage((prevState) => prevState + 1)} /> */}
                </div>
            )
        } else {
            return (
                <div className=''>
                    <PaymentPage/>
                    {/* <PayCheckout
                        path="/kitchen/payments/InvoiceSuccess" /> */}
                </div>
            )
        }
    }

    useEffect(() => {
        if (page === 2 || page === 3) {
            setVisible(false)
        }
    }, [page])
  return (
      <>
      i am checkout
      </>
  )
}

export default ConfirmationPage