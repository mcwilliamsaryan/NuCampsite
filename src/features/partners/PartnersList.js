import { Col } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnersSlice';

const PartnersList = () => {
  const partners = selectAllPartners();
  return (
    <Col md='5' className='m-4' key={partners.id}>
      {partners.map((partner) => {
        return (
          <div className='d-flex mb-5' and key={partner.id}>
            <Partner partner={partner} />
          </div>
        );
      })}
    </Col>
  );
};

export default PartnersList;
