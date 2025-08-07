import girl1 from './assets/girl1.jpg';

function ProfilePicture () {
  const handleClick = (e) => e.target.style.display= "none";

  return (
    <img onClick={(e) => handleClick(e)} src={girl1} alt="目前圖片有問題" />
  );
}

export default ProfilePicture;
