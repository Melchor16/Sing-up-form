export default function Thanks({ setProceed }) {
  return (
    <div className="thanks">
      <h2>Congratulations! Your registration has been successful</h2>
      <p>
        Welcome to our website! We hope you enjoy all the features and benefits
        we have to offer. If you have any questions or need assistance, feel
        free to contact us. Have a great experience in our online community!
      </p>
      <button onClick={() => setProceed(false)}>Take me back</button>
    </div>
  );
}
