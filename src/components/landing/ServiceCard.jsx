const ServiceCard = ({logo,title,descp}) => {
  return (
    <div className="service-card">
      <span>{logo}</span>
    <h2>{title}</h2>
    <p>{descp}</p>
    </div>
  )
}

export default ServiceCard
