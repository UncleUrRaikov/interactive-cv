import style from './Contacts.module.css';

function ContactCard({ icon, platform, url }) {
    return (
    <a href={url} className={style.url} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={platform} className={style.icon} />
      <h3 className={style.platform}>{platform}</h3>
    </a>
             );
  }
  
  export default ContactCard;