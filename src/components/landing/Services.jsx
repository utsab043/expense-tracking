import { Airplay, BarChart, Bell } from "react-feather";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className="container">
      <h2>Services</h2>
      <div className="flex services-list">
        <ServiceCard logo={<Airplay/>}title="USER FRIENDLY" descp="Expense Tracking is user friendly and very easy to use."/>
        <ServiceCard logo={<BarChart/>}title="REPORTING" descp="Expense Tracking provide you with daily, weekly and monthly reporting."/>
        <ServiceCard logo={<Bell/>}title="NOTIFICATION" descp="Expense Tracking provide you with timely notifications."/>
      </div>
    </div>
  );
};

export default Services;
