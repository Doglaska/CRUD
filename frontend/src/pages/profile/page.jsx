import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/auth";
import orderServices from "../../services/order";
import styles from './page.module.css';
import { LuLogOut, LuTimer } from "react-icons/lu";
import Loading from "../loading/page";

export default function Profile() {
    const { logout } = authServices();
    const { getUserOrders, orderLoading, ordersList } = orderServices();
    const navigate = useNavigate();
    const authData = JSON.parse(localStorage.getItem('auth'));

    useEffect(() => {
        if (!authData) {
            navigate('/auth');
        } else {
            getUserOrders(authData?.user?._id);
        }
    }, [authData]);

    if (orderLoading) {
        return (<Loading />);
    }

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className={styles.pageContainer}>
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>
            </div>
            <button onClick={handleLogout}>Logout <LuLogOut /></button>

            {ordersList.length > 0 ? (
                <div className={styles.ordersContainer}>
                    {ordersList.map((order) => (
                        <div key={order._id} className={styles.orderContainer}>
                            {order.pickupStatus === 'Pending' && <p className={`${styles.pickupStatus} ${styles.pending}`}><LuTimer />{order.pickupStatus}</p>}
                            <h3>{order.pickupTime}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    Lista vazia
                </div>
            )}
        </div>
    );
}
