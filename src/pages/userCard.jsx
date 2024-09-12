import '../styles/userCard.css';

const Card = ({user}) => {
  return (
    <>
      <div id="box1">
        <div id="header">
          <h1>{user.name}</h1>
          <h3>@{user.username}</h3>
        </div>
        <div>
          <div id="section1">
            <p>
              <strong>Email:</strong>{user.email}
            </p>
            <p>
              <strong>Phone:</strong>{user.phone}
            </p>
            <p>
              <strong>Website:</strong>{user.website}
            </p>
          </div>

          <div id="section2">
            <p>
              <strong>Address:</strong>
              {user.address.street}
            </p>
          </div>
          <div id="company">
            <strong>Company:</strong>
            <p>{user.company.name}</p>
            <strong>Catchphrase:</strong>
            <p>{user.company.catchPhrase}</p>
            <strong>Business:</strong>
            <p>{user.company.bs}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;