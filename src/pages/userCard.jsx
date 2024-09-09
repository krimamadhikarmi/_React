import '../styles/userCard.css';

const Card = () => {
  return (
    <div className="card">
      <div className="nameTag">
        <h2>Krima Madhikarmi</h2>
        <h3>@Krima</h3>
      </div>
      <div className="intro">
        <div>
          <p>
            <strong>Email:</strong> krima@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> 123456
          </p>
          <p>
            <strong>Website:</strong> krima1234
          </p>
        </div>
        <div>
          <strong>Address:</strong> Suryabinayak,Bhaktapur
        </div>
        <div>
          <strong>Company:</strong>
          <p>Romagurea-Crona</p>
          <strong> Catchphrase:</strong>
          <p>"MultiLayered"</p>
          <strong> Busniess:</strong>
          <p> Harness e-mark</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
