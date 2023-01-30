import './NotificationBar.css';
function NotificationBar({notificationText}){
    const componente = 
        <div className="divRow divNotification">
            <p className="p_notification">{notificationText}</p>
        </div>
    return(
        <>
            {((notificationText)?componente:<></>)}
        </>        
    )
}
export default NotificationBar;