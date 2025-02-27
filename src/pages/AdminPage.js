import React from "react";
import 'rc-time-picker/assets/index.css';
import RegisterForm from "../components/registerForm";
import BookCleaning from "../components/bookCleaning";
import DeleteForm from "../components/DeleteForm";
import ShowBookings from "./showBookings";
import getEmailFromToken from "../utils/CustomerUtils";
import {Navigate} from "react-router-dom";




export default function AdminPage() {
    const customerEmail = getEmailFromToken();

    const [showRegister, setShowRegister] = React.useState(false)
    const onClickRegister = () => {
        if(showRegister === true){setShowRegister(false)} 
        else{setShowRegister(true)}
    }
    const [showDelete, setShowDelete] = React.useState(false)
    const onClickDelete = () => {
        if(showDelete === true){setShowDelete(false)}
        else{setShowDelete(true)}
    }
    const [showBooking, setShowBooking] = React.useState(false)
    const onClickBooking = () => {
        if(showBooking === true){setShowBooking(false)}
        else{setShowBooking(true)}
    }
    const [showBookingList, setShowBookingList] = React.useState(false)
    const onClickBookingList = () => {
        if(showBookingList === true){setShowBookingList(false)}
        else{setShowBookingList(true)}
    }

    if (customerEmail == null) {
        return <Navigate to="/"/>
    }

    return (
        <div className="admin-main-div">
            <div className="register-customer-div">
                <h1 className="admin-title">Registrera kund</h1>
                <input type="submit" value="Visa" onClick={onClickRegister} />
                {showRegister !== false ? <RegisterForm /> : null}
                
            </div>
            <div className="delete-customer-div">
                <h1 className="admin-title">Radera kund</h1>
                <input type="submit" value="Visa" onClick={onClickDelete} />
                {showDelete !== false ? <DeleteForm /> : null}
                
            </div>
            <div className="book-customer-div">
                <h1 className="admin-title">Boka kund</h1>
                <input type="submit" value="Visa" onClick={onClickBooking} />
                {showBooking !== false ? <BookCleaning /> : null}
            </div>

            <div className="book-customer-div">
                <h1 className="admin-title">Visa bokingar</h1>
                <input type="submit" value="Visa" onClick={onClickBookingList} />
                {showBookingList !== false ? <ShowBookings /> : null}
            </div>
        </div>
    )
}