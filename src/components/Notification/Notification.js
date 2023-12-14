import './Notification.css';
import smile from './smile.png';

export default function Notification({ message }) {
  return (
    <div className="notification-container">
      <p>{message}</p>
      <img className="smile" src={smile} alt="Smile" />
    </div>
  );
}
