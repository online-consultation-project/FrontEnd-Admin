export const SubCard = ({ props, className }) => {
    return (
  
      <div className={className}>
        <h2>{props.image}</h2>
        <p>{props.title}</p>
      </div>
      
    );
  };