const Notification = (props) => {
  const { name, color, imgUrl } = props;
  return (
    <div className={color}>
      <img src={imgUrl} className="icon" />
      <p className="name"> {name} </p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading"> Notifications </h1>
    <div className="notifications_con">
      <Notification
        name="Information Message"
        color="primary"
        imgUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        name="Success Message"
        color="success"
        imgUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        name="Warning Message"
        color="warning"
        imgUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        name="Danger Message"
        color="error"
        imgUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
